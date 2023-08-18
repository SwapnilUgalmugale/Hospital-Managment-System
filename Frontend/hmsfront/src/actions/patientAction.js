import {
  PATIENT_SIGNIN_REQUEST,
  PATIENT_SIGNIN_SUCCESS,
  PATIENT_SIGNIN_FAIL,
  PATIENT_SIGNOUT,
  PATIENT_SIGNUP_REQUEST,
  PATIENT_SIGNUP_SUCCESS,
  PATIENT_SIGNUP_FAIL,
  PATIENT_GET_DOC_REQUEST,
  PATIENT_GET_DOC_SUCCESS,
  PATIENT_GET_DOC_FAIL,
  PATIENT_BOOK_Appointment_REQUEST,
  PATIENT_BOOK_Appointment_SUCCESS,
  PATIENT_BOOK_Appointment_FAIL,
  PATIENT_GET_PROFILE_REQUEST,
  PATIENT_GET_PROFILE_SUCCESS,
  PATIENT_GET_PROFILE_FAIL,
  PATIENT_EDIT_PROFILE_REQUEST,
  PATIENT_EDIT_PROFILE_SUCCESS,
  PATIENT_EDIT_PROFILE_FAIL,
  PATIENT_VIEW_PRESC_REQUEST,
  PATIENT_VIEW_PRESC_SUCCESS,
  PATIENT_VIEW_PRESC_FAIL,
} from '../constants/patientConstants'
import axios from 'axios'
import {SPRINGURL} from "../constants/URLConstants"

export const patientSigninAction = (email, password) => {

  return (dispatch) => {
    dispatch({
      type: PATIENT_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }
    const url = SPRINGURL+'/patient/login'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PATIENT_SIGNIN_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: PATIENT_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}
export const patientSignupAction = (name, gender, email, password) => {
  return (dispatch) => {
    dispatch({
      type: PATIENT_SIGNUP_REQUEST,
    })

    const header = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      name,
      gender,
      email,
      password,
    }
    const url = SPRINGURL+'/patient/register'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PATIENT_SIGNUP_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: PATIENT_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}
export const patientGetdoctors = () => {
  return (dispatch) => {
    dispatch({
      type: PATIENT_GET_DOC_REQUEST,
    })

    const header = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = SPRINGURL+'/patient/bookAppointment'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PATIENT_GET_DOC_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: PATIENT_GET_DOC_FAIL,
          payload: error,
        })
      })
  }
}
export const patientBookAppointment = (date, p_id, d_id) => {
  return (dispatch) => {
    dispatch({
      type: PATIENT_BOOK_Appointment_REQUEST,
    })

    const header = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = {
      apptDate: date,
      apptPatient: {
        id: p_id,
      },
      apptDoctor: {
        id: d_id,
      },
    }

    const url = SPRINGURL+'/patient/bookAppointment'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PATIENT_BOOK_Appointment_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: PATIENT_BOOK_Appointment_FAIL,
          payload: error,
        })
      })
  }
}

export const patientGetProfileAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: PATIENT_GET_PROFILE_REQUEST,
    })

    const header = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = SPRINGURL+'/patient/editProfile/' + id

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PATIENT_GET_PROFILE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: PATIENT_GET_PROFILE_FAIL,
          payload: error,
        })
      })
  }
}

export const patientEditProfileAction = (
  name,gender,email,password,city,age,contact,bloodGroup) => {
  return (dispatch) => {
    dispatch({
      type: PATIENT_EDIT_PROFILE_REQUEST,
    })

    const header = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = {name,gender,email,password,city,age,contact,bloodGroup}

    const url = SPRINGURL+'/patient/editProfile'

    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: PATIENT_EDIT_PROFILE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: PATIENT_EDIT_PROFILE_FAIL,
          payload: error,
        })
      })
  }
}

export const patientGetPrescAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: PATIENT_VIEW_PRESC_REQUEST,
    })

    const header = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = SPRINGURL+'/patient/viewPrescription/' + id

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PATIENT_VIEW_PRESC_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: PATIENT_VIEW_PRESC_FAIL,
          payload: error,
        })
      })
  }
}

export const patientLogout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('pat_info')    
    sessionStorage.removeItem('isLoggedIn')
    dispatch({ type: PATIENT_SIGNOUT })
    document.location.href = '/home'
  }
}