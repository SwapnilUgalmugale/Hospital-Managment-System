import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patientGetPrescAction } from '../../actions/patientAction'
import Header from '../../components/Header'
import PatientNavBar from '../../components/PatientNavBar'

const PatientViewPrescScreen = () => {
  const user = JSON.parse(sessionStorage.getItem('pat_info'))
  const prescriptions = useSelector((store) => store.patientViewPrescription)
  const { response } = prescriptions

  //const[prescription,setPrescription]=useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(patientGetPrescAction(user.id))
  }, [])

  return (
    <div>
      <PatientNavBar name={user.name} />
      <Header title="My prescriptions" />

      <table className="table table-striped container">
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((presc, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{presc.prescDate}</td>
                  <td>Dr. {presc.name}</td>
                  <td>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Medicine Name</th>
                          <th>Qty</th>
                        </tr>
                      </thead>
                      {presc.medicines.map((med, index2) => {
                        return (
                          <tbody>
                            <tr>
                              <td>{index2 + 1}</td>
                              <td>{med.medicine.name}</td>
                              <td>{med.qty}</td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
export default PatientViewPrescScreen
