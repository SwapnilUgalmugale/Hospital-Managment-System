import {
  APPOINTMENT_FETCH_REQUEST,
  APPOINTMENT_FETCH_SUCCESS,
  APPOINTMENT_FETCH_FAIL ,
  APPOINTMENT_FETCH_RESET,
  MEDICINELIST_FETCH_REQUEST,
  MEDICINELIST_FETCH_SUCCESS,
  MEDICINELIST_FETCH_FAIL,
  MEDICINELIST_FETCH_RESET,
  TESTLIST_FETCH_REQUEST,
  TESTLIST_FETCH_SUCCESS,
  TESTLIST_FETCH_FAIL,
  TESTLIST_FETCH_RESET,
  TESTPRESC_FETCH_REQUEST,
  TESTPRESC_FETCH_SUCCESS,
  TESTPRESC_FETCH_FAIL,
  TESTPRESC_FETCH_RESET,
  MEDPRESC_FETCH_REQUEST,
  MEDPRESC_FETCH_SUCCESS,
  MEDPRESC_FETCH_FAIL,
  MEDPRESC_FETCH_RESET,
} from "../constants/DoctorConstants"

export const fetchAppointmentReducer = (state = [], action) => {
    switch (action.type) {
      case APPOINTMENT_FETCH_REQUEST:
        return { loading2: true }
      case APPOINTMENT_FETCH_SUCCESS:
        return { loading2: false, response2: action.payload }
      case APPOINTMENT_FETCH_FAIL:
        return { loading2: false, error2: action.payload }
      case APPOINTMENT_FETCH_RESET:
        return {}
      default:
        return state
    }
  }

  export const fetchMedicinesReducer = (state = [], action) => {
    switch (action.type) {
      case MEDICINELIST_FETCH_REQUEST:
        return { loading: true }
      case MEDICINELIST_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case MEDICINELIST_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case MEDICINELIST_FETCH_RESET:
        return {}
      default:
        return state
    }
  }

   export const fetchTestsReducer = (state = [], action) => {
    switch (action.type) {
      case TESTLIST_FETCH_REQUEST:
        return { loading: true }
      case TESTLIST_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case TESTLIST_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case TESTLIST_FETCH_RESET:
        return {}
      default:
        return state
    }
  }

  export const createTestPrescReducer = (state = {}, action) => {
    switch (action.type) {
      case TESTPRESC_FETCH_REQUEST:
        return { loading1: true };
      case TESTPRESC_FETCH_SUCCESS:
        return { loading1: false, response1: action.payload };
      case TESTPRESC_FETCH_FAIL:
        return { loading1: false, error1: action.payload };
      case TESTPRESC_FETCH_RESET:
        return {};
      default:
        return state;
    }
  }

  export const createMedPrescReducer = (state = {}, action) => {
    switch (action.type) {
      case MEDPRESC_FETCH_REQUEST:
        return { loading1: true };
      case MEDPRESC_FETCH_SUCCESS:
        return { loading1: false, response1: action.payload };
      case MEDPRESC_FETCH_FAIL:
        return { loading1: false, error1: action.payload };
      case MEDPRESC_FETCH_RESET:
        return {};
      default:
        return state;
    }
  }

  
  
  