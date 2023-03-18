import { fetchAdminLogin, fetchAdminProfile, logoutAdminProfile } from "../../helper/axiosHelper";
import { setUser } from "./adminUserSlice";
import { toast } from "react-toastify";

export const loginAdmin = (frmDt) => async (dispatch) => {
  //call axios to check if login is success
  const resultPromise = fetchAdminLogin(frmDt);
  toast.promise(resultPromise, {
    pending: "Please wait ...",
  });
  const { status, message, tokens } = await resultPromise;


  if (tokens?.accessJWT) {
    const {accessJWT, refreshJWT} = tokens
    sessionStorage.setItem("accessJWT", accessJWT)
    localStorage.setItem("refreshJWT", refreshJWT)
    dispatch(getAdminUserProfile())
  }
  //show react toastify
  toast[status](message);

  // if login successful then we would receive user data which we need to send to state by using dispatch
  // admin?._id && dispatch(setUser(admin));



};
export const getAdminUserProfile =  () => async (dispatch) => {
  //axios to get user with session token

  const {status, admin} = await fetchAdminProfile()
  if(status === "success" && admin?._id){
    dispatch(setUser(admin));
  }
}



export const autoLogin = () => (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT")
  const refreshJWT = localStorage.getItem("refreshJWT")
  //if accessJWT exist

  if(accessJWT){
    return dispatch(getAdminUserProfile())
  }
}



export const autoLogout = () => dispatch=>  {
  //remove data from state
dispatch(setUser({}))


//call axios to logout

logoutAdminProfile()
//remove broweser data

sessionStorage.removeItem("accessJWT")
localStorage.removeItem("refreshJWT")
}