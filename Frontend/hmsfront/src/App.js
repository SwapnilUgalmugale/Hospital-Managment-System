import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import BookAppointment from './screens/PatientScreens/BookAppointmentScreen'
import EmployeeScreen from './screens/EmployeeScreen'
import AdminHomeScreen from './screens/AdminScreens/AdminHomeScreen'
import RecpHomeScreen from './screens/ReceptionistScreens/RecpHomeScreen'
import PatientSignIn from './screens/PatientScreens/PatientSignInScreen'
import PatientSignUp from './screens/PatientScreens/PatientSignUpScreen'
import PatientHome from './screens/PatientScreens/PatientHomeScreen'
import PatientViewPresc from './screens/PatientScreens/PatientViewPrescScreen'
import PatientEditProfile from './screens/PatientScreens/PatientEditProfileScreen'
import LabManagerViewPresc from './screens/LabMgrScreens/LabManagerViewPrescScreen'
import LabHomeScreen from './screens/LabMgrScreens/LabHomeScreen'
import DoctorScreen from './screens/DoctorScreens/DoctorScreen'
import DoctorAppointmentScreen from './screens/DoctorScreens/DoctorAppointmentScreen'
import DoctorMedicineListScreen from './screens/DoctorScreens/DoctorMedicineListScreen'
import DoctorTestListScreen from './screens/DoctorScreens/DoctorTestListScreen'
import DoctorTestPrescriptionScreen from './screens/DoctorScreens/DoctorTestPrescriptionScreen'
import DoctorMedPrescriptionScreen from './screens/DoctorScreens/DoctorMedPrescriptionScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} />
          
        </Switch>
      </Router>
    </div>
  )
}

export default App
