import {
  EMPLOYEE_SIGNIN_REQUEST,
  EMPLOYEE_SIGNIN_SUCCESS,
  EMPLOYEE_SIGNIN_FAIL,
  EMPLOYEE_SIGNUP_REQUEST,
  EMPLOYEE_SIGNUP_SUCCESS,
  EMPLOYEE_SIGNUP_FAIL,
  EMPLOYEE_VIEWEMPLOYEES_REQUEST,
  EMPLOYEE_VIEWEMPLOYEES_FAIL,
  EMPLOYEE_VIEWEMPLOYEES_SUCCESS,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_SIGNOUT,
  ADMIN_GET_ALL_CHARGES_FAIL,
  ADMIN_GET_ALL_CHARGES_REQUEST,
  ADMIN_GET_ALL_CHARGES_SUCCESS,
} from '../constants/employeeConstants'
import axios from 'axios'
import { SPRINGURL } from '../constants/URLConstants'

export const employeeSigninAction = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: EMPLOYEE_SIGNIN_REQUEST,
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
    const url = SPRINGURL + '/user/login'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: EMPLOYEE_SIGNIN_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: EMPLOYEE_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}

export const employeeSignupAction = (employee_details) => {
  return (dispatch) => {
    dispatch({
      type: EMPLOYEE_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = SPRINGURL + '/admin/register'
    axios
      .post(url, employee_details, header)
      .then((response) => {
        dispatch({
          type: EMPLOYEE_SIGNUP_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: EMPLOYEE_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const viewEmployeesAction = () => {
  return (dispatch) => {
    dispatch({
      type: EMPLOYEE_VIEWEMPLOYEES_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = SPRINGURL + '/admin'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: EMPLOYEE_VIEWEMPLOYEES_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: EMPLOYEE_VIEWEMPLOYEES_FAIL,
          payload: error,
        })
      })
  }
}

export const employeeDeleteAction = (emp_id) => {
  return (dispatch) => {
    dispatch({
      type: EMPLOYEE_DELETE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = SPRINGURL + '/admin/delete/' + emp_id
    axios
      .delete(url, header)
      .then((dresponse) => {
        dispatch({
          type: EMPLOYEE_DELETE_SUCCESS,
          payload: dresponse,
        })
      })
      .catch((derror) => {
        dispatch({
          type: EMPLOYEE_DELETE_FAIL,
          payload: derror,
        })
      })
  }
}

export const employeeUpdateAction = (emp_id, emp_details) => {
  return (dispatch) => {
    dispatch({
      type: EMPLOYEE_UPDATE_REQUEST,
    })
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = SPRINGURL + '/admin/update/' + emp_id
    axios
      .put(url, emp_details, header)
      .then((response) => {
        dispatch({
          type: EMPLOYEE_UPDATE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: EMPLOYEE_UPDATE_FAIL,
          payload: error,
        })
      })
  }
}

export const employeeLogoutAction = () => {
  return (dispatch) => {
    sessionStorage.removeItem('emp_details')
    sessionStorage.removeItem('emp_id')
    sessionStorage.removeItem('isLoggedIn')
    sessionStorage.removeItem('patient_id')
    sessionStorage.removeItem('docId')
    dispatch({ type: EMPLOYEE_SIGNOUT })
    document.location.href = '/home'
  }
}

export const adminGetTotalChargesAction = () => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_GET_ALL_CHARGES_REQUEST,
    })
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = SPRINGURL + '/receptionist/totalCharges'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: ADMIN_GET_ALL_CHARGES_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_GET_ALL_CHARGES_FAIL,
          payload: error,
        })
      })
  }
}
