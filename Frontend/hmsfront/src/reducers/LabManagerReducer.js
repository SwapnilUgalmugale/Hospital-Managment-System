import { LAB_VIEW_PRESC_FAIL, LAB_VIEW_PRESC_REQUEST, LAB_VIEW_PRESC_SUCCESS } from "../constants/labManagerConstants";

export const labManagerViewPrescReducer = (state = {}, action) => {
  switch (action.type) {
    case LAB_VIEW_PRESC_REQUEST:
      return { loading: true };
    case LAB_VIEW_PRESC_SUCCESS:
      return { loading: false, response: action.payload };
    case LAB_VIEW_PRESC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}