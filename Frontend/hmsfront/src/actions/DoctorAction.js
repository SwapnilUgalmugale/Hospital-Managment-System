import {
  APPOINTMENT_FETCH_REQUEST,
  APPOINTMENT_FETCH_SUCCESS,
  APPOINTMENT_FETCH_FAIL,
  APPOINTMENT_FETCH_RESET,
  MEDICINELIST_FETCH_REQUEST,
  MEDICINELIST_FETCH_SUCCESS,
  MEDICINELIST_FETCH_FAIL,
  TESTPRESC_FETCH_REQUEST,
  TESTPRESC_FETCH_SUCCESS,
  TESTPRESC_FETCH_FAIL,
  TESTLIST_FETCH_REQUEST,
  TESTLIST_FETCH_SUCCESS,
  TESTLIST_FETCH_FAIL,
  MEDPRESC_FETCH_REQUEST,
  MEDPRESC_FETCH_SUCCESS,
  MEDPRESC_FETCH_FAIL,
} from '../constants/DoctorConstants'
import axios from 'axios'
import { SPRINGURL } from '../constants/URLConstants'

export const getAppointment = (docId) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENT_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = SPRINGURL + `/doctor/appointments/${sessionStorage['docId']}`
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: APPOINTMENT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: APPOINTMENT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getMedicines = () => {
  return (dispatch) => {
    dispatch({
      type: MEDICINELIST_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = SPRINGURL + '/doctor/medicines'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: MEDICINELIST_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: MEDICINELIST_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const testPresc = (tests_id) => {
  return (dispatch) => {
    dispatch({
      type: TESTPRESC_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      p_id: sessionStorage['patient_id'],
      tests_id,
    }
    const url =
      SPRINGURL + `/doctor/tests/prescription/${sessionStorage['docId']}`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: TESTPRESC_FETCH_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: TESTPRESC_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getTests = () => {
  return (dispatch) => {
    dispatch({
      type: TESTLIST_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = SPRINGURL + '/doctor/tests'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: TESTLIST_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: TESTLIST_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const medPresc = (medicines) => {
  return (dispatch) => {
    dispatch({
      type: MEDPRESC_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      pId: sessionStorage['patient_id'],
      medicines,
    }
    const url =
      SPRINGURL + `/doctor/medicine/prescription/${sessionStorage['docId']}`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: MEDPRESC_FETCH_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: MEDPRESC_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
