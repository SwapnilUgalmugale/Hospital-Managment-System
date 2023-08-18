import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  patientGetdoctors,
  patientBookAppointment,
} from "../../actions/patientAction";
import Header from "../../components/Header";
import PatientNavBar from "../../components/PatientNavBar";
import StripeCheckout from "react-stripe-checkout";
import { appointmentPaymentAction } from "../../actions/PaymentAction";

const BookAppointmentScreen = (props) => {
  const user = JSON.parse(sessionStorage.getItem("pat_info"));
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  // const user = useSelector((store) => store.patientSignin.response.data)
  const doctors = useSelector((store) => store.patientGetDoc);
  const { error, response, loading } = doctors;
  const bookAppointment = useSelector((store) => store.patientBookAppointment);
  const { berror, bloading, bresponse } = bookAppointment;

  const paymentDetails = useSelector((store) => store.paymentDetails);
  const { perror, ploading, presponse } = paymentDetails;

  useEffect(() => {
    dispatch(patientGetdoctors());
  }, []);

  const onToken = (token) => {
    console.log(token);
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
    dispatch(appointmentPaymentAction(user.email, token.id, 300));
  };

  useEffect(() => {
    if (presponse && presponse.status == "200") {
      dispatch(patientBookAppointment(date, user.id, doctor));
    } else if (presponse && presponse.status == "error") {
      alert(presponse.error);
    } else if (perror) {
      alert(perror);
    }
  }, [perror, ploading, presponse]);

  useEffect(() => {
    if (bresponse && bresponse.status == "200") {
      alert("appointment booked successfully");
      props.history.push("/patientHome");
    } else if (bresponse && bresponse.status == "error") {
      alert(bresponse.error);
    } else if (berror) {
      alert(berror);
    }
  }, [berror, bloading, bresponse]);

  return (
    <div>
      <PatientNavBar name={user.name} />
      <div className="center-align fadeInDown">
        <h3 className="text-center">Book Appointment</h3>
        <div className="form box-shadow">
          <div className="mb-3">
            <label className="form-label">Select Doctor</label>
            <select
              onChange={(e) => {
                setDoctor(e.target.value);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select Doctor</option>
              {response &&
                response.data.map((doc) => (
                  <option value={doc.id}>{doc.name}</option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Appointment Date</label>
            <input
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="text-center">
          <StripeCheckout
            stripeKey="pk_test_51IH49aL4tlyYStR0PBlw9PW5vQGgaIhuGy61N9FBDlDK5bEDbDx7fJvrwE8C45QyHH9A5h4IIuuc4tiyGgcIyUjR00N9lXSPrP"
            token={onToken}
          >
            <button className="btn btn-primary btn-lg btn-block">
              Pay and Book
            </button>
          </StripeCheckout>
        </div>
      </div>
      {loading && <div className="text-center">waiting for response</div>}
    </div>
  );
};
export default BookAppointmentScreen;
