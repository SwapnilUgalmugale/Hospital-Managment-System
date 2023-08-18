import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import DoctorHomeNavBar from '../../components/DoctorHomeNavBar'
import Profile from '../AdminScreens/Profile'
import DoctorAppointmentScreen from './DoctorAppointmentScreen'
import DoctorMedicineListScreen from './DoctorMedicineListScreen'
import DoctorMedPrescriptionScreen from './DoctorMedPrescriptionScreen'
import DoctorTestListScreen from './DoctorTestListScreen'
import DoctorTestPrescriptionScreen from './DoctorTestPrescriptionScreen'

const DoctorScreen = (props) => {
  const doctor = useSelector((store) => store.employeeSignin)
  const { response } = doctor
  const docId = response && response.data && response.data.id
  console.log('Doc id ' + docId)
  const doct = JSON.parse(sessionStorage.getItem('emp_details'))
  console.log('Doc id ' + docId)
  sessionStorage.setItem('docId', doct.id)

  return (
    <div>
      <DoctorHomeNavBar />
      <Switch>
        <Route
          path="/doctor/appointments"
          component={DoctorAppointmentScreen}
        />
        <Route exact path="/doctor">
          <Redirect to="/doctor/home" />
        </Route>
        <Route path="/doctor/home" component={Profile} />
        <Route path="/doctor/med_list" component={DoctorMedicineListScreen} />
        <Route path="/doctor/test_list" component={DoctorTestListScreen} />
        <Route
          path="/doctor/test_presc"
          component={DoctorTestPrescriptionScreen}
        />
        <Route
          path="/doctor/med_presc"
          component={DoctorMedPrescriptionScreen}
        />
      </Switch>
    </div>
  )
}

export default DoctorScreen
