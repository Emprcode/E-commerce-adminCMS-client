import { toast } from "react-toastify"
import { postcategory } from "../../helper/axiosHelper"


export const postNewCategory = data => async dispatch => {
    const {status, message} = await postcategory(data)
    toast[status](message)
}