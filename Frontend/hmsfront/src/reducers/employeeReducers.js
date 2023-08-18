import {
  ADMIN_GET_ALL_CHARGES_FAIL,
  ADMIN_GET_ALL_CHARGES_REQUEST,
  ADMIN_GET_ALL_CHARGES_SUCCESS,
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_SIGNIN_FAIL,
  EMPLOYEE_SIGNIN_REQUEST,
  EMPLOYEE_SIGNIN_SUCCESS,
  EMPLOYEE_SIGNOUT,
  EMPLOYEE_SIGNUP_FAIL,
  EMPLOYEE_SIGNUP_REQUEST,
  EMPLOYEE_SIGNUP_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_VIEWEMPLOYEES_FAIL,
  EMPLOYEE_VIEWEMPLOYEES_REQUEST,
  EMPLOYEE_VIEWEMPLOYEES_SUCCESS,
} from "../constants/employeeConstants";

export const employeeSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_SIGNIN_REQUEST:
      return { loading: true };
    case EMPLOYEE_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload };
    case EMPLOYEE_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case EMPLOYEE_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const employeeSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_SIGNUP_REQUEST:
      return { loading: true };
    case EMPLOYEE_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload };
    case EMPLOYEE_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const viewEmployeesReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_VIEWEMPLOYEES_REQUEST:
      return { loading: true };
    case EMPLOYEE_VIEWEMPLOYEES_SUCCESS:
      return { loading: false, response: action.payload };
    case EMPLOYEE_VIEWEMPLOYEES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_DELETE_REQUEST:
      return { dloading: true };
    case EMPLOYEE_DELETE_SUCCESS:
      return { dloading: false, dresponse: action.payload };
    case EMPLOYEE_DELETE_FAIL:
      return { dloading: false, derror: action.payload };
    default:
      return state;
  }
};

export const employeeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_UPDATE_SUCCESS:
      return { loading: false, response: action.payload };
    case EMPLOYEE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminTotalChargesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_CHARGES_REQUEST:
      return { loading: true };
    case ADMIN_GET_ALL_CHARGES_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_GET_ALL_CHARGES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
