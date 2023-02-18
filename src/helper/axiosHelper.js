import axios from "axios";

const apiUrl = process.env.REACT_APP_ROOT_API;
const adminUrl = apiUrl + "/admin";

//register

export const postAdminUser = async (userObj) => {
  try {
    const { data } = await axios.post(adminUrl, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
