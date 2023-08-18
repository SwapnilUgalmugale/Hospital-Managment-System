import Header from '../../components/Header'
import '../../App.css'

import { useSelector } from 'react-redux'

const DoctorTestPrescriptionScreen = (props) => {

  const presc = useSelector((store) => store.prescription)
  const { response1 } = presc

  // call this only once (when the page has loaded successfully)
  // console.log("new "+response1.data)

  return (
    <div>
      <Header title="Test Prescription" />

      <div className="container">
        {response1 && response1.data && (
          <div>
            <table>
              <tr>
                <td>Prescription id : {response1.data.id}</td>
                <td></td>
                <td>Date : {response1.data.prescDate}</td>
              </tr>
              <tr>
                <td>Patient id : {response1.data.patient.id}</td>
                <td></td>
                <td>Patient name : {response1.data.patient.name}</td>
              </tr>
            </table>
            <hr></hr>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {response1.data.tests.map((test, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{test.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <br></br>
            <hr></hr>
            <table className="prescdoc">
              <tr>Doctor name : {response1.data.doctor.name}</tr>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorTestPrescriptionScreen
