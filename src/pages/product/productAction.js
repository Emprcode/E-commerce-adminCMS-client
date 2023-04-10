import { toast } from "react-toastify";
import { fetchProducts, postNewProduct } from "../../helper/axiosHelper";
import { requestPending, setProducts } from "./productSlice";




// add new product 


export const addNewProduct = (data) => async (dispatch) => {
    dispatch(requestPending());
    const {status, message} = await postNewProduct(data)
    toast[status](message)

    status === "success" && dispatch(getProducts())



}

//getproducts 


export const getProducts = () => async(dispatch) => {
    const {status, result} = await fetchProducts()
console.log(status, result)

    status === "success" && dispatch(setProducts(result))
}