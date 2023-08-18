import { createStore, combineReducers, applyMiddleware } from 'redux'
import {adminTotalChargesReducer, employeeDeleteReducer,employeeSigninReducer,employeeSignupReducer,employeeUpdateReducer,viewEmployeesReducer,} from './reducers/employeeReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { recpAdmitPatientReducer, recpDischargePatientReducer, recpGetAdmitPatientsReducer, recpGetAllAppointmentsReducer, recpGetDoctorsReducer, recpMakePaymentReducer, recpViewAppointmentsReducer } from './reducers/recpReducers'
import {patientSigninReducer,patientSignupReducer,patientGetDocReducer,patientBookAppoReducer,patientGetProfileReducer,patientEditProfileReducer,patientviewPrescReducer,} from './reducers/patientReducer'
import { createMedPrescReducer, createTestPrescReducer, fetchAppointmentReducer, fetchMedicinesReducer, fetchTestsReducer } from "./reducers/DoctorReducer";
import { labManagerViewPrescReducer } from './reducers/LabManagerReducer'
import { paymentReducer } from './reducers/paymentReducer'

// combined reducers
const reducers = combineReducers({
  employeeSignin: employeeSigninReducer,

  employeeSignup: employeeSignupReducer,
  //admin
  viewEmployees:viewEmployeesReducer,
  deleteEmployee:employeeDeleteReducer,
  updateEmployee:employeeUpdateReducer,
  totalCharges:adminTotalChargesReducer,



  //doctor
  appointment:fetchAppointmentReducer,
  medicine:fetchMedicinesReducer,
  test:fetchTestsReducer,
  prescription:createTestPrescReducer,
  medicinePresc:createMedPrescReducer,
  
  //receptionist
  recpDoctors:recpGetDoctorsReducer,
  recpAppointments:recpViewAppointmentsReducer,
  recpAllAppointments:recpGetAllAppointmentsReducer,
  recpAdmitPatient:recpAdmitPatientReducer,
  recpGetAdmitPatients:recpGetAdmitPatientsReducer,
  recpDischargePatient:recpDischargePatientReducer,
  recpMakePayment:recpMakePaymentReducer,
  //lab manager
  labManagerviewPresc: labManagerViewPrescReducer,




  //patient
  patientSignin: patientSigninReducer,
  patientSignup: patientSignupReducer,
  patientGetDoc: patientGetDocReducer,
  patientBookAppointment: patientBookAppoReducer,
  patientGetprofile: patientGetProfileReducer,
  patientEditprofile: patientEditProfileReducer,
  patientViewPrescription: patientviewPrescReducer,
  paymentDetails:paymentReducer
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
