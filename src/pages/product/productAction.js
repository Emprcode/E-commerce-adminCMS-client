import { toast } from "react-toastify";
import { fetchProducts, postNewProduct } from "../../helper/axiosHelper";
import { requestPending, setProducts } from "./ProductSlice"



// add new product 


export const addNewProduct = (data) => async (dispatch) => {
    dispatch(requestPending());
    const {status, message} = await postNewProduct(data)
    toast[status](message)

    status === "success" && dispatch(getproducts())



}

//getproducts 


export const getproducts = () => async(dispatch) => {
    const {status, result} = await fetchProducts()

    status === "success" && dispatch(setProducts(result))
}