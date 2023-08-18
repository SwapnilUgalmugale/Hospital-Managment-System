import axios from "axios";
import { PAYMENT_FAIL, PAYMENT_REQ, PAYMENT_SUCC } from "../constants/PaymentConstants";
import {SPRINGURL} from "../constants/URLConstants"

export const appointmentPaymentAction = (email, token,amount) => {
  
  return (dispatch) => {
    dispatch({
      type: PAYMENT_REQ,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      token,
      amount
    };
    const url = SPRINGURL+"/payment";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PAYMENT_SUCC,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: PAYMENT_FAIL,
          payload: error,
        });
      });
  };
};