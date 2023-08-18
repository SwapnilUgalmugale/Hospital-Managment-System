import {
  PATIENT_SIGNIN_REQUEST,
  PATIENT_SIGNIN_SUCCESS,
  PATIENT_SIGNIN_FAIL,
  PATIENT_SIGNOUT,
  PATIENT_SIGNUP_SUCCESS,
  PATIENT_SIGNUP_REQUEST,
  PATIENT_SIGNUP_FAIL,
  PATIENT_GET_DOC_REQUEST,
  PATIENT_GET_DOC_SUCCESS,
  PATIENT_GET_DOC_FAIL,
  PATIENT_BOOK_Appointment_REQUEST,
  PATIENT_BOOK_Appointment_SUCCESS,
  PATIENT_BOOK_Appointment_FAIL,
  PATIENT_EDIT_PROFILE_FAIL,
  PATIENT_EDIT_PROFILE_REQUEST,
  PATIENT_EDIT_PROFILE_SUCCESS,
  PATIENT_GET_PROFILE_FAIL,
  PATIENT_GET_PROFILE_REQUEST,
  PATIENT_GET_PROFILE_SUCCESS,
  PATIENT_VIEW_PRESC_REQUEST,
  PATIENT_VIEW_PRESC_SUCCESS,
  PATIENT_VIEW_PRESC_FAIL,
} from '../constants/patientConstants'

export const patientSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_SIGNIN_REQUEST:
      return { loading: true }
    case PATIENT_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload }
    case PATIENT_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case PATIENT_SIGNOUT:
      return {}
    default:
      return state
  }
}
export const patientSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_SIGNUP_REQUEST:
      return { loading: true }
    case PATIENT_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case PATIENT_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const patientGetDocReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_GET_DOC_REQUEST:
      return { loading: true }
    case PATIENT_GET_DOC_SUCCESS:
      return { loading: false, response: action.payload }
    case PATIENT_GET_DOC_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const patientBookAppoReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_BOOK_Appointment_REQUEST:
      return { bloading: true }
    case PATIENT_BOOK_Appointment_SUCCESS:
      return { bloading: false, bresponse: action.payload }
    case PATIENT_BOOK_Appointment_FAIL:
      return { bloading: false, berror: action.payload }
    default:
      return state
  }
}

export const patientGetProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_GET_PROFILE_REQUEST:
      return { loading: true }
    case PATIENT_GET_PROFILE_SUCCESS:
      return { loading: false, response: action.payload }
    case PATIENT_GET_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const patientEditProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_EDIT_PROFILE_REQUEST:
      return { eloading: true }
    case PATIENT_EDIT_PROFILE_SUCCESS:
      return { eloading: false, eresponse: action.payload }
    case PATIENT_EDIT_PROFILE_FAIL:
      return { eloading: false, eerror: action.payload }
    default:
      return state
  }
}

export const patientviewPrescReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_VIEW_PRESC_REQUEST:
      return {loading: true }
    case PATIENT_VIEW_PRESC_SUCCESS:
      return { loading: false, response: action.payload }
    case PATIENT_VIEW_PRESC_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
