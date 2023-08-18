import {
  RECP_GET_DOCTORS_FAIL,
  RECP_GET_DOCTORS_REQUEST,
  RECP_GET_DOCTORS_SUCCESS,
  RECP_VIEW_APPOINTMENTS_FAIL,
  RECP_VIEW_APPOINTMENTS_REQUEST,
  RECP_VIEW_APPOINTMENTS_SUCCESS,
  RECP_VIEW_APPOINTMENTS_RESET,
  RECP_ALL_APPOINTMENTS_REQUEST,
  RECP_ALL_APPOINTMENTS_SUCCESS,
  RECP_ALL_APPOINTMENTS_FAIL,
  RECP_ALL_APPOINTMENTS_RESET,
  RECP_ADMIT_PATIENT_REQUEST,
  RECP_ADMIT_PATIENT_SUCCESS,
  RECP_ADMIT_PATIENT_FAIL,
  RECP_DISCHARGE_PATIENT_REQUEST,
  RECP_DISCHARGE_PATIENT_SUCCESS,
  RECP_DISCHARGE_PATIENT_FAIL,
  RECP_GET_ADMIT_PATIENT_REQUEST,
  RECP_GET_ADMIT_PATIENT_SUCCESS,
  RECP_GET_ADMIT_PATIENT_FAIL,
  RECP_MAKE_PAYMENT_REQUEST,
  RECP_MAKE_PAYMENT_SUCCESS,
  RECP_MAKE_PAYMENT_FAIL,
} from "../constants/RecpConstants";

export const recpGetDoctorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECP_GET_DOCTORS_REQUEST:
      return { dloading: true };
    case RECP_GET_DOCTORS_SUCCESS:
      return { dloading: false, dresponse: action.payload };
    case RECP_GET_DOCTORS_FAIL:
      return { dloading: false, derror: action.payload };
    default:
      return state;
  }
};
export const recpViewAppointmentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECP_VIEW_APPOINTMENTS_REQUEST:
      return { loading: true };
    case RECP_VIEW_APPOINTMENTS_SUCCESS:
      return { loading: false, response: action.payload };
    case RECP_VIEW_APPOINTMENTS_FAIL:
      return { loading: false, error: action.payload };
    case RECP_VIEW_APPOINTMENTS_RESET:
      return {};
    default:
      return state;
  }
};

export const recpGetAllAppointmentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECP_ALL_APPOINTMENTS_REQUEST:
      return { aloading: true };
    case RECP_ALL_APPOINTMENTS_SUCCESS:
      return { aloading: false, aresponse: action.payload };
    case RECP_ALL_APPOINTMENTS_FAIL:
      return { aloading: false, aerror: action.payload };
    case RECP_ALL_APPOINTMENTS_RESET:
      return {};
    default:
      return state;
  }
};

export const recpAdmitPatientReducer = (state = {}, action) => {
  switch (action.type) {
    case RECP_ADMIT_PATIENT_REQUEST:
      return { ploading: true };
    case RECP_ADMIT_PATIENT_SUCCESS:
      return { ploading: false, presponse: action.payload };
    case RECP_ADMIT_PATIENT_FAIL:
      return { ploading: false, perror: action.payload };
    default:
      return state;
  }
};

export const recpGetAdmitPatientsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECP_GET_ADMIT_PATIENT_REQUEST:
      return { loading: true };
    case RECP_GET_ADMIT_PATIENT_SUCCESS:
      return { loading: false, response: action.payload };
    case RECP_GET_ADMIT_PATIENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const recpDischargePatientReducer = (state = {}, action) => {
  switch (action.type) {
    case RECP_DISCHARGE_PATIENT_REQUEST:
      return { dloading: true };
    case RECP_DISCHARGE_PATIENT_SUCCESS:
      return { dloading: false, dresponse: action.payload };
    case RECP_DISCHARGE_PATIENT_FAIL:
      return { dloading: false, derror: action.payload };
    default:
      return state;
  }
};

export const recpMakePaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case RECP_MAKE_PAYMENT_REQUEST:
      return { mloading: true };
    case RECP_MAKE_PAYMENT_SUCCESS:
      return { mloading: false, mresponse: action.payload };
    case RECP_MAKE_PAYMENT_FAIL:
      return { mloading: false, merror: action.payload };
    default:
      return state;
  }
};
