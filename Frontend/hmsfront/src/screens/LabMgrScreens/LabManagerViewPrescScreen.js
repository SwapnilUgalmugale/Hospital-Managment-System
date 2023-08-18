import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { labManagerViewPrescriptionAction } from "../../actions/labManagerActios";
import Header from "../../components/Header";
import LabNavBar from "../../components/LabNavBar";

const LabManagerViewPrescScreen = (props) => {
  const [pId, setP_Id] = useState("");
  const dispatch = useDispatch();
  const LabViewPresc = useSelector((store) => store.labManagerviewPresc);
  const { error, loading, response } = LabViewPresc;

  const onViewPrescription = () => {
    dispatch(labManagerViewPrescriptionAction(pId));
  };

  useEffect(() => {}, [error, loading, response]);
  
  // useEffect(() => {
  //   dispatch(labManagerViewPrescriptionAction(pId))
  // }, [])


  return (
    <div>
      <LabNavBar />
      <Header title="Prescriptions" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Enter Patient Id</label>
          <input
            onChange={(e) => {
              setP_Id(e.target.value);
            }}
            type="number"
            className="form-control"
            placeholder="Patient id"
          />
        </div>
        <div className="mb-3">
          <button onClick={onViewPrescription} className="btn btn-success">
            View Prescription
          </button>
        </div>
      </div>
      <div>
        {response && (
          <table className="table table-striped container">
            <thead>
              <tr>
                <th>Name</th>
                <th>Recommended By Dr.</th>
                <th>Date</th>
                <th>tests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5>{response && response.data.patient}</h5>
                </td>
                <td>
                  <h5>{response && response.data.doctor}</h5>
                </td>
                <td>
                  <h5>{response && response.data.prescDate}</h5>
                </td>
                {response &&
                  response.data.tests.map((test, index) => (
                    <tr>
                      <td>
                        <h5>{index + 1}. </h5>
                      </td>
                      <td>
                        <h5>{test.name}</h5>
                      </td>
                    </tr>
                  ))}
              </tr>
            </tbody>
          </table>
        )}
      </div>
      {!response && (
        <div className="container text-center">No Prescriptions</div>
      )}
    </div>
  );
};
export default LabManagerViewPrescScreen;
