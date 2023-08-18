import {
  RECP_ADMIT_PATIENT_FAIL,
  RECP_ADMIT_PATIENT_REQUEST,
  RECP_ADMIT_PATIENT_SUCCESS,
  RECP_ALL_APPOINTMENTS_FAIL,
  RECP_ALL_APPOINTMENTS_REQUEST,
  RECP_ALL_APPOINTMENTS_SUCCESS,
  RECP_DISCHARGE_PATIENT_FAIL,
  RECP_DISCHARGE_PATIENT_REQUEST,
  RECP_DISCHARGE_PATIENT_SUCCESS,
  RECP_GET_ADMIT_PATIENT_FAIL,
  RECP_GET_ADMIT_PATIENT_REQUEST,
  RECP_GET_ADMIT_PATIENT_SUCCESS,
  RECP_GET_DOCTORS_FAIL,
  RECP_GET_DOCTORS_REQUEST,
  RECP_GET_DOCTORS_SUCCESS,
  RECP_MAKE_PAYMENT_REQUEST,
  RECP_MAKE_PAYMENT_SUCCESS,
  RECP_MAKE_PAYMENT_FAIL,
  RECP_VIEW_APPOINTMENTS_FAIL,
  RECP_VIEW_APPOINTMENTS_REQUEST,
  RECP_VIEW_APPOINTMENTS_SUCCESS,
} from "../constants/RecpConstants";
import axios from "axios";
import {SPRINGURL} from "../constants/URLConstants"

export const recpGetDoctorsAction = () => {
  
  return (dispatch) => {
    dispatch({
      type: RECP_GET_DOCTORS_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = SPRINGURL+"/receptionist/appointments";
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: RECP_GET_DOCTORS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: RECP_GET_DOCTORS_FAIL,
          payload: error,
        });
      });
  };
};

export const recpViewAppointmentsAction = (doc_id) => {
  return (dispatch) => {
    dispatch({
      type: RECP_VIEW_APPOINTMENTS_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = SPRINGURL+"/receptionist/appointments/" + doc_id;
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: RECP_VIEW_APPOINTMENTS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: RECP_VIEW_APPOINTMENTS_FAIL,
          payload: error,
        });
      });
  };
};

export const recpGetAllAppointmentsAction = () => {
  return (dispatch) => {
    dispatch({
      type: RECP_ALL_APPOINTMENTS_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = SPRINGURL+"/receptionist/allAppointments";
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: RECP_ALL_APPOINTMENTS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: RECP_ALL_APPOINTMENTS_FAIL,
          payload: error,
        });
      });
  };
};

export const recpAdmitPatientAction = (appointment, admitDate, department) => {
  return (dispatch) => {
    dispatch({
      type: RECP_ADMIT_PATIENT_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const admitPatDetails = { appointment, admitDate, department };
    const url = SPRINGURL+"/receptionist/admitPatient";
    axios
      .post(url, admitPatDetails, header)
      .then((response) => {
        dispatch({
          type: RECP_ADMIT_PATIENT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: RECP_ADMIT_PATIENT_FAIL,
          payload: error,
        });
      });
  };
};

export const recpGetAdmitPatientsAction = () => {
  return (dispatch) => {
    dispatch({
      type: RECP_GET_ADMIT_PATIENT_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = SPRINGURL+"/receptionist/dischargePatient";
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: RECP_GET_ADMIT_PATIENT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: RECP_GET_ADMIT_PATIENT_FAIL,
          payload: error,
        });
      });
  };
};

export const recpDischargePatientAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: RECP_DISCHARGE_PATIENT_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = SPRINGURL+"/receptionist/dischargePatient/" + id;
    axios
      .put(url, header)
      .then((response) => {
        dispatch({
          type: RECP_DISCHARGE_PATIENT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: RECP_DISCHARGE_PATIENT_FAIL,
          payload: error,
        });
      });
  };
};

export const recpMakePaymentAction = (
  patientId,
  apptId,
  wardCharges,
  testCharges
) => {
  return (dispatch) => {
    dispatch({
      type: RECP_MAKE_PAYMENT_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { apptId, patientId, testCharges, wardCharges };
    const url = SPRINGURL+"/receptionist/acceptPayment";
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: RECP_MAKE_PAYMENT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: RECP_MAKE_PAYMENT_FAIL,
          payload: error,
        });
      });
  };
};
