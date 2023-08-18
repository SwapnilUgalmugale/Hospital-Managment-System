import axios from 'axios'
import { LAB_VIEW_PRESC_FAIL, LAB_VIEW_PRESC_REQUEST, LAB_VIEW_PRESC_SUCCESS } from '../constants/labManagerConstants'
import {SPRINGURL} from "../constants/URLConstants"

export const labManagerViewPrescriptionAction = (id) => {
  
  return (dispatch) => {
    dispatch({
      type: LAB_VIEW_PRESC_REQUEST,
    })

    const header = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = SPRINGURL+'/lab/viewTestPresc/' + id

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: LAB_VIEW_PRESC_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: LAB_VIEW_PRESC_FAIL,
          payload: error,
        })
      })
  }
}