import { toast } from "react-toastify"
import { fetchCategories, postcategory } from "../../helper/axiosHelper"
import { setCats } from "./categorySlice"





export const postNewCategory = data => async (dispatch) => {
    const {status, message} = await postcategory(data)
    toast[status](message)
    status === "success" && dispatch(getCategories())
}

export const getCategories = data => async (dispatch) => {
    const {status, result} = await fetchCategories()
   status === "success" && dispatch(setCats(result))
}