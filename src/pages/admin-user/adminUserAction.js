import { toast } from "react-toastify";
import { fetchAdminLogin } from "../../helper/axiosHelper";
import { setUser } from "./adminUserSlice";

export const loginAdmin = (formData) => async (dispatch) => {
  //call axios
  const { status, message, result } = await fetchAdminLogin(formData);
  //show react toastify

  toast[status](message);

  //use dispatch

  result?._id && dispatch(setUser(result));
};
