import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAppointment } from '../../actions/DoctorAction'
import Header from '../../components/Header'

const DoctorAppointmentScreen = (props) => {
  const doctor = useSelector((store) => store.employeeSignin)
  const { response } = doctor
  const docId = response && response.data && response.data.id
  const dispatch = useDispatch()
  const appointments = useSelector((store) => store.appointment)
  const { error2, response2, loading2 } = appointments

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getAppointment(docId))
  }, [])

  useEffect(() => {}, [error2, response2, loading2])
  const create_med = () => {
    console.log('pId ' + sessionStorage['patient_id'])
    props.history.push('/doctor/med_list')
  }
  const create_test = () => {
    console.log('pId ' + sessionStorage['patient_id'])
    props.history.push('/doctor/test_list')
  }
  return (
    <div className="container">
      <Header title="Appointments" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Appointment id</th>
            <th>Date</th>
            <th>Patient id</th>
            <th>Patient name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {response2 &&
            response2.length > 0 &&
            response2.map((appointment) => {
              return (
                <tr>
                  <td>{appointment.id}</td>
                  <td>{appointment.apptDate}</td>
                  <td>{appointment.apptPatient.id}</td>
                  <td>{appointment.apptPatient.name}</td>
                  <td>
                    <button
                      class="btn btn-success"
                      onClick={() => {
                        sessionStorage.setItem(
                          'patient_id',
                          appointment.apptPatient.id
                        )
                        create_med()
                      }}>
                      Create Medicine Prescription
                    </button>
                  </td>
                  <td>
                    <button
                      class="btn btn-success"
                      onClick={() => {
                        sessionStorage.setItem(
                          'patient_id',
                          appointment.apptPatient.id
                        )
                        create_test()
                      }}>
                      Create Test Prescription
                    </button>
                  </td>
                  <td></td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default DoctorAppointmentScreen
