import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  recpGetAllAppointmentsAction,
  recpMakePaymentAction,
} from "../../actions/recpActions";
import Header from "../../components/Header";

const RecpAcceptPayment = (props) => {
  const [patientId, setPatientId] = useState("");
  const [apptId, setApptId] = useState("");
  const [wardCharges, setWardCharges] = useState("");
  const [testCharges, setTestCharges] = useState("");
  let appointments = [];
  const getAppointment = (aId) => {
    appointments = aresponse.data.filter((a) => a.id == aId);
    setPatientId(appointments.pop().apptPatient.id);
  };
  const allAppts = useSelector((store) => store.recpAllAppointments);
  const { aresponse } = allAppts;
  const recpMakePayment = useSelector((store) => store.recpMakePayment);
  let { merror, mresponse } = recpMakePayment;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recpGetAllAppointmentsAction());
  }, []);

  const onPayment = () => {
    dispatch(
      recpMakePaymentAction(patientId, apptId, wardCharges, testCharges)
    );
  };

  useEffect(() => {
    if (mresponse && mresponse.status == "202") {
      alert("Payment successfull");
      document.location.href = "/receptionist/home";
    } else if (merror) {
      alert("Payment failed....");
    }
  }, [merror, mresponse]);

  return (
    <div>
      <Header title="Accept Payment" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Appt Id</label>
          <select
            onChange={(e) => {
              getAppointment(e.target.value);
              setApptId(e.target.value);
            }}
            className="form-select"
          >
            <option defaultValue>Select appointment id</option>
            {aresponse &&
              aresponse.data.length > 0 &&
              aresponse.data.map((a) => {
                return <option value={a.id}>{a.id}</option>;
              })}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Patient Id</label>
          <select
            disabled
            onChange={(e) => {
              setPatientId(e.target.value);
            }}
            className="form-select"
          >
            <option defaultValue="" value={patientId}>
              {patientId}
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Ward Charges</label>
          <input
            defaultValue={0.0}
            onChange={(e) => {
              setWardCharges(e.target.value);
            }}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Lab Charges</label>
          <input
            defaultValue={0.0}
            onChange={(e) => {
              setTestCharges(e.target.value);
            }}
            className="form-control"
          ></input>
        </div>
        <div className="text-center">
          <button onClick={onPayment} className="btn btn-success btn-block ">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecpAcceptPayment;
