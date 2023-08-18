import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from '../components/Footer'
import Home from '../components/Home'
import HomeNavBar from '../components/HomeNavBar'
import AboutScreen from './About'
import Contact from './Contact'
import DoctorScreen from './Doctors'
import EmployeeScreen from './EmployeeScreen'
import PatientSignInScreen from './PatientScreens/PatientSignInScreen'
import DoctorHomeScreen from './DoctorScreens/DoctorScreen'
import AdminHomeScreen from './AdminScreens/AdminHomeScreen'
import DoctorAppointmentScreen from './DoctorScreens/DoctorAppointmentScreen'
import DoctorMedicineListScreen from './DoctorScreens/DoctorMedicineListScreen'
import DoctorTestListScreen from './DoctorScreens/DoctorTestListScreen'
import DoctorTestPrescriptionScreen from './DoctorScreens/DoctorTestPrescriptionScreen'
import DoctorMedPrescriptionScreen from './DoctorScreens/DoctorMedPrescriptionScreen'
import RecpHomeScreen from './ReceptionistScreens/RecpHomeScreen'
import LabHomeScreen from './LabMgrScreens/LabHomeScreen'
import LabManagerViewPrescScreen from './LabMgrScreens/LabManagerViewPrescScreen'
import PatientSignUpScreen from './PatientScreens/PatientSignUpScreen'
import PatientHomeScreen from './PatientScreens/PatientHomeScreen'
import PatientEditProfileScreen from './PatientScreens/PatientEditProfileScreen'
import PatientViewPrescScreen from './PatientScreens/PatientViewPrescScreen'
import BookAppointmentScreen from './PatientScreens/BookAppointmentScreen'

const HomeScreen = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn')

  return (
    <div>
      {!isLoggedIn && <HomeNavBar />}
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/aboutUs" component={AboutScreen} />
        <Route path="/doctors" component={DoctorScreen} />
        <Route path="/contacts" component={Contact} />
        <Route path="/employee" component={EmployeeScreen} />
        <Route path="/patientSignIn" component={PatientSignInScreen} />
        <Route path="/bookAppointment" component={BookAppointmentScreen} />
        {/* admin */}
        <Route path="/admin" component={AdminHomeScreen} />
        {/* doctor */}
        
        <Route path="/doctor" component={DoctorHomeScreen} />
        <Route path="/doctor/appointment" component={DoctorAppointmentScreen} />
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
        {/* receptionist */}
        <Route path="/receptionist" component={RecpHomeScreen} />
        {/* lab manager */}
        <Route exact path="/lab">
          <Redirect to="/lab/home" />
        </Route>
        <Route path="/lab/home" component={LabHomeScreen} />
        <Route
          path="/lab/viewPrescriptions"
          component={LabManagerViewPrescScreen}
        />
        {/* patient */}
        <Route path="/patientSignIn" component={PatientSignInScreen} />
        <Route path="/patientSignUp" component={PatientSignUpScreen} />
        <Route path="/patientHome" component={PatientHomeScreen} />
        <Route
          path="/patient/editProfile"
          component={PatientEditProfileScreen}
        />
        <Route
          path="/patient/viewPrescription"
          component={PatientViewPrescScreen}
        />
      </Switch>
      <Footer />
    </div>
  )
}
export default HomeScreen
