import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  recpDischargePatientAction,
  recpGetAdmitPatientsAction,
} from "../../actions/recpActions";
import Header from "../../components/Header";

const RecpDischargePatient = (props) => {
  const dischargePat = useSelector((store) => store.recpDischargePatient);
  const { derror, dresponse, dloading } = dischargePat;
  let isDischarged = false;
  const admitPatients = useSelector((store) => store.recpGetAdmitPatients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recpGetAdmitPatientsAction());
  }, [isDischarged]);

  useEffect(() => {
    if (dresponse && dresponse.status == "200") {
      document.location.href = "/receptionist/discharge-patient";
      alert("Patient discharged successfully");
    }else if(derror){
      alert(derror);
    }
  }, [derror, dresponse, dloading]);

  const onDischarge = (id) => {
    isDischarged = true;
    dispatch(recpDischargePatientAction(id));
    // window.location.reload(true);
  };
  return (
    <div>
      <Header title="Discharge Patient" />
      <div className="container">
        {admitPatients.response &&
        admitPatients.response.data.list.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Aadmit Date</th>
                <th>Patient Id</th>
                <th>Dept Id</th>
                <th>Discharge</th>
              </tr>
            </thead>
            <tbody>
              {admitPatients.response.data.list.map((e) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.admitDate}</td>
                    <td>{e.patient}</td>
                    <td>{e.department}</td>
                    <td>
                      <button
                        onClick={() => {
                          onDischarge(e.id);
                        }}
                        className="btn btn-primary"
                        type="button"
                      >
                        Discharge
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3>No Patient is admitted</h3>
        )}
      </div>
    </div>
  );
};
export default RecpDischargePatient;
