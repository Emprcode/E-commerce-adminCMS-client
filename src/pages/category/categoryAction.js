import { toast } from "react-toastify"
import { deleteCategory, fetchCategories, postcategory, updateCategory } from "../../helper/axiosHelper"
import { setCats } from "./categorySlice"





export const postNewCategory = data => async (dispatch) => {
    const {status, message} = await postcategory(data)
    toast[status](message)
    status === "success" && dispatch(getCategories())
}

export const getCategories = () => async (dispatch) => {
    const {status, result} = await fetchCategories()
   status === "success" && dispatch(setCats(result))
}

export const updateCategoryAction = data => async (dispatch) => {
    const {status, message} = await updateCategory(data)
    toast[status](message)
    status === "success" && dispatch(getCategories())
}
export const deleteCategoryAction = _id => async (dispatch) => {
    const {status, message} = await deleteCategory(_id)
    toast[status](message)
    status === "success" && dispatch(getCategories())
}