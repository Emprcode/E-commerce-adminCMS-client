import { toast } from "react-toastify";
import { fetchAdminLogin } from "../../helper/axiosHelper";
import { setUser } from "./adminUserSlice";

export const loginAdmin = (formData) => async (dispatch) => {
  //call axios
  const resultPromise = fetchAdminLogin(formData);
  toast.promise(resultPromise, {
    pending: "please wait......",
  });

  //show react toastify
  const { status, message, result } = await resultPromise;
  toast[status](message);

  //use dispatch

  result?._id && dispatch(setUser(result));
};
