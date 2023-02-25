import axios from "axios";
const apiRoot = process.env.REACT_APP_ROOT_API;
const adminAPI = apiRoot + "/admin";

export const axiosProcessor = async ({ url, method, objDt }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: objDt,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

export const postAdminUser = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI,
    objDt,
  };
  return axiosProcessor(obj);
};

export const verifyAdminUser = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/verify-email",
    objDt,
  };
  return axiosProcessor(obj);
};

export const fetchAdminLogin = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/login",
    objDt,
  };
  return axiosProcessor(obj);
};

export const fetchReqOtp = (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/request-otp",
    objDt,
  };
  return axiosProcessor(obj);
};
