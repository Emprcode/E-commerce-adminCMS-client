import { toast } from "react-toastify";
import { fetchItems, postItems } from "../../helper/axiosHelper"
import { setItems } from "./ItemsSlice"

   export const postItemsAction = (obj) => async(dispatch) => {

   
    const {status, message} = await postItems(obj);
   //  const {status, message} = await  postItems(obj);
    console.log(message)
    toast[status](message)


    status === "success" && dispatch(getItemsAction())
   }


   export  const getItemsAction = () => async(dispatch)=> {
    const {status, result} = await fetchItems()

    status === "success" && dispatch(setItems(result))
   } 