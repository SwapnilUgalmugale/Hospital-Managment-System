import Header from '../../components/Header'
import '../../App.css'

import {useSelector } from 'react-redux'

const DoctorMedPrescriptionScreen = (props) => {


  const medicinePresc = useSelector((store) => store.medicinePresc)
  const { response1 } = medicinePresc

  return (
    <div>
      <Header title="Medicine Prescription" />

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
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {response1.data.medicines.map((med, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{med.medicine.name}</td>
                      <td>{med.qty}</td>
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

export default DoctorMedPrescriptionScreen
