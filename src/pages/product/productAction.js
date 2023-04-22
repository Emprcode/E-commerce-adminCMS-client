import { toast } from "react-toastify";
import { fetchAllProducts, postProduct } from "../../helper/axiosHelper"
import { setProducts } from "./productSlice"

   export const postProductAction = (obj) => async(dispatch) => {

   
    const {status, message} = await postProduct(obj);
   //  const {status, message} = await  postItems(obj);
    console.log(message)
    toast[status](message)


    status === "success" && dispatch(getProductsAction())
   }


   export  const getProductsAction = () => async(dispatch)=> {
    const {status, result} = await fetchAllProducts()

    status === "success" && dispatch(setProducts(result))
   } 