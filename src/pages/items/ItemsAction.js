import { toast } from "react-toastify";
import { fetchItems, postItems } from "../../helper/axiosHelper"
import { setItems } from "./ItemsSlice"

   export const postItemsAction = (obj) => async(dispatch) => {

    const responsePromise  = postItems(obj);

    toast.promise(responsePromise, {
        pending:"Please wait ....."
    })
    const {status, message} = await responsePromise;
    console.log(message)
    toast[status](message)


    status === "success" && dispatch(getItemsAction())
   }


   export  const getItemsAction = () => async(dispatch)=> {
    const {status, result} = await fetchItems()

    status === "success" && dispatch(setItems(result))
   } 