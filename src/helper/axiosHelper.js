import axios from "axios";

const apiUrl = process.env.REACT_APP_ROOT_API;
const adminUrl = apiUrl + "/admin";

const axiosProcessor = async ({ url, method, userObj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: userObj,
    });
    // console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//register

export const postAdminUser = (userObj) => {
  const obj = {
    method: "post",
    url: adminUrl,
    userObj,
  };
  return axiosProcessor(obj);
};

//email verification
export const verifyAdminUser = (userObj) => {
  const obj = {
    method: "post",
    url: adminUrl + "/email-verify",
    userObj,
  };
  return axiosProcessor(obj);
};

//admin login
export const fetchAdminLogin = (userObj) => {
  const obj = {
    method: "post",
    url: adminUrl + "/login",
    userObj,
  };
  return axiosProcessor(obj);
};

export const fetchReqOtp = (userObj) => {
  const obj = {
    method: "post",
    url: adminUrl + "/request-otp",
    userObj,
  };
  return axiosProcessor(obj);
};
