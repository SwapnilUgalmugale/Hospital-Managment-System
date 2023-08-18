import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  recpGetDoctorsAction,
  recpViewAppointmentsAction,
} from "../../actions/recpActions";

const RecpViewAppointments = (props) => {
  const [doc_id, setDoc_id] = useState("");
  const dispatch = useDispatch();
  const doctors = useSelector((store) => store.recpDoctors);

  const appointments = useSelector((store) => store.recpAppointments);
  const { response } = appointments;

  useEffect(() => {
    dispatch(recpGetDoctorsAction());
  }, []);

  useEffect(() => {
    dispatch(recpViewAppointmentsAction(doc_id));
  }, [doc_id]);

  return (
    <div className="recp-view-appt container">
      <Header title="Today's All Appointments" />
      <div>
        <label className="form-label">Select Doctor</label>
        <select
          onChange={(e) => {
            setDoc_id(e.target.value);
          }}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue>Select Doctor</option>
          {doctors.dresponse &&
            doctors.dresponse.data.map((d) => {
              return <option value={d.id}>{d.name}</option>;
            })}
        </select>
      </div>
      {doc_id &&
      appointments.response &&
      appointments.response.data.length > 0 ? (
        <div>
          <h3 className="title">Appointments</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>App Id</th>
                <th>App date</th>
                <th>Patient Name</th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((app) => {
                return (
                  <tr>
                    <td>{app.id}</td>
                    <td>{app.apptDate}</td>
                    {app.apptPatient && <td>{app.apptPatient.name}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No Appointments for the doctor today</h3>
      )}
    </div>
  );
};

export default RecpViewAppointments;
