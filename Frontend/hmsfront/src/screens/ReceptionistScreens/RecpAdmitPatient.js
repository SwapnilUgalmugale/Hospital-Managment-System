import { useDispatch, useSelector } from "react-redux";
import {
  recpAdmitPatientAction,
  recpGetAllAppointmentsAction,
} from "../../actions/recpActions";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
const RecpAdmitPatient = (props) => {
  const [admitDate, setAdmitDate] = useState("");
  const [department, setDepartment] = useState("");
  const allAppts = useSelector((store) => store.recpAllAppointments);
  const {  aresponse } = allAppts;
  
  const dispatch = useDispatch();
  const onAdmit = (id) => {
    console.log("id", id);
    dispatch(recpAdmitPatientAction(id, admitDate, department));
    //  window.location.reload(true)
  };
  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(recpGetAllAppointmentsAction());
  }, []);

  return (
    <div>
      <Header title="Admit Patient" />
      {aresponse && aresponse.data.length > 0 ? (
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Select Date</label>
            <input
              required
              onChange={(e) => {
                setAdmitDate(e.target.value);
              }}
              type="date"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Department Id</label>
            <select
              required
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select Department Id</option>
              <option value="2">Cardiology</option>
              <option value="3">Neurology</option>
              <option value="4">Orthopedics</option>
              <option value="5">Opthalmology</option>
            </select>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Appt Id</th>
                <th>Appt Date</th>
                <th>Patient Name</th>
                <th>Admit</th>
              </tr>
            </thead>
            <tbody>
              {aresponse && aresponse.data.map((e) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.apptDate}</td>
                    <td>{e.apptPatient.name}</td>
                    <td>
                      <button
                        onClick={() => {
                          onAdmit(e.id);
                        }}
                        className="btn btn-primary"
                        type="button"
                      >
                        Admit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>No Patient to be admitted</h3>
      )}
    </div>
  );
};

export default RecpAdmitPatient;
