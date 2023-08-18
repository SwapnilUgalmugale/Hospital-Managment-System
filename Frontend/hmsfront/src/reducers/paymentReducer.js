import { PAYMENT_FAIL, PAYMENT_REQ, PAYMENT_SUCC } from "../constants/PaymentConstants"

export const paymentReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_REQ:
      return { ploading: true }
    case PAYMENT_SUCC:
      return { ploading: false, presponse: action.payload }
    case PAYMENT_FAIL:
      return { ploading: false, perror: action.payload }
    default:
      return state
  }
}