import { toast } from "react-toastify"
import { postPaymentOptions, fetchPaymentOptions, deleteSiglePaymentOption } from "../../helper/axiosHelper"
import { requestPending, setPaymentOption } from "./paymentOptionsSlice"


//add new payment options
export const addNewPaymentOptions = (data)=> async (dispatch) => {
    dispatch(requestPending())
    const {status, message} = await postPaymentOptions(data)
    toast[status](message) 
    status ==="success" && dispatch(getPaymentOptions())
}

//getpayment options
export const getPaymentOptions = ()=> async (dispatch) => {
   
    const {status, result} = await fetchPaymentOptions()
    status === "success"  && dispatch(setPaymentOption(result))
}

//delete payment options
export const deletePaymentOptions = (data) => async(dispatch) => {
    const {status, message}= await deleteSiglePaymentOption(data);
    toast[status](message)

    status === "success" && dispatch(getPaymentOptions())
}