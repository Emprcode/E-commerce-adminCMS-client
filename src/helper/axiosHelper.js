import axios from "axios";
const apiRoot = process.env.REACT_APP_ROOT_API;
const adminAPI = apiRoot + "/admin";
const categoryAPI = apiRoot + "/category";
const paymentOptionsAPI = apiRoot + "/payment-options";
const productApi = apiRoot + "/product";
// const itemsApi = apiRoot + "/items";

export const axiosProcessor = async ({ url, method, objDt, isPrivate }) => {
  const headers = isPrivate
    ? {
        Authorization: sessionStorage.getItem("accessJWT"),
      }
    : null;
  try {
    const { data } = await axios({
      method,
      url,
      data: objDt,
      headers,
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
export const fetchResetPassword = (objDt) => {
  const obj = {
    method: "patch",
    url: adminAPI + "/reset-password",
    objDt,
  };
  return axiosProcessor(obj);
};
export const fetchAdminProfile = () => {
  const obj = {
    method: "get",
    url: adminAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const logoutAdminProfile = () => {
  const obj = {
    method: "patch",
    url: adminAPI + "/logout",
    isPrivate: true,
    token: localStorage.getItem("refreshJWT"),
  };
  return axiosProcessor(obj);
};

// category

//post category
export const postcategory = (objDt) => {
  const obj = {
    method: "post",
    url: categoryAPI,
    objDt,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
//getcategory
export const fetchCategories = () => {
  return axiosProcessor({
    method: "get",
    url: categoryAPI,

    isPrivate: true,
  });
};
//updatecategory
export const updateCategory = (objDt) => {
  return axiosProcessor({
    method: "put",
    url: categoryAPI,
    objDt,
    isPrivate: true,
  });
};
//delete category
export const deleteCategory = (_id) => {
  return axiosProcessor({
    method: "delete",
    url: categoryAPI + "/" + _id,

    isPrivate: true,
  });
};

//post payment-options
export const postPaymentOptions = (objDt) => {
  const obj = {
    method: "post",
    url: paymentOptionsAPI,
    objDt,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
//fetch payment-options
export const fetchPaymentOptions = () => {
  const obj = {
    method: "get",
    url: paymentOptionsAPI,

    isPrivate: true,
  };
  return axiosProcessor(obj);
};

//delete payment Options 
export const deleteSiglePaymentOption =(_id)=> {
  const obj ={
    method:"delete",
    url: paymentOptionsAPI + "/" + _id,


    isPrivate: true

  }
  return axiosProcessor(obj)
}



//post new product

// export const postNewProduct = (objDt) => {
// const obj ={
//   method: "post",
//   url: productApi,
//   objDt,

//   isPrivate: true
// }

// return axiosProcessor(obj)
// }

//fetch product

// export const fetchProducts = () => {
//   const obj ={
//     method:"get",
//     url: productApi,

//     isPrivate: true
//   }
//   return axiosProcessor(obj)
// }

//update product

// export const updateSingleProduct = (objDt)=> {
//   const obj ={
//     method:"put",
//     url:productApi,
//     objDt
//   }
//   return axiosProcessor(obj)
// }

//delete product

// export const deleteSingleProduct = (objDt) => {
// const obj = {
//   method: "delete",
//   url: productApi,
//   objDt,


//   isPrivate: true
// }
// return axiosProcessor(obj)
// }

// ##### ______Items
//add new products
export const postProduct = (objDt)=> {
  const obj ={
    method:"post",
    url:productApi,
    objDt,

    isPrivate: true
  }
  return axiosProcessor(obj)
}

//fetch items

export const fetchAllProducts = () =>{
  const obj = {
    method: "get",
    url: productApi,
    isPrivate : true
  }
  return axiosProcessor(obj)
} 
//update items

export const updateProducts = (objDt) =>{
  const obj = {
    method: "put",
    url: productApi,
    objDt,
    isPrivate : true
  }
  return axiosProcessor(obj)
} 

//delete items

export const deleteSingleProduct = (objDt) =>{
  const obj = {
    method: "delete",
    url: productApi,
    objDt,
    isPrivate : true
  }
  return axiosProcessor(obj)
} 