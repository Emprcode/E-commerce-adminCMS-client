import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, loginAdmin } from "../admin-user/adminUserAction";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()

  const emailRef = useRef("");
  const passRef = useRef("");

  const { admin } = useSelector((state) => state.adminInfo);

  const fromPath = location.state?.from?.pathname || "/dashboard"
  useEffect(() => {
    admin?._id ? navigate(fromPath) : dispatch(autoLogin())
  }, [admin?._id, navigate, fromPath, dispatch]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    dispatch(loginAdmin(obj));
  };



  return (
    <AdminLayout>
      <div className="reg-page">
        <Form
          onSubmit={handleOnSubmit}
          className="border mt-5 p-3 rounded shadow-lg pt-5"
        >
          <h2 className="mb-3 text-center fw-bold">Welcome!</h2>
          <hr className="mb-5" />

          {/* {inputs.map((item) => (
            <CustomInpute key={item.name} {...item} />
          ))} */}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              ref={emailRef}
              name="email"
              placeholder="smith@gmail.com "
              required
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              ref={passRef}
              name="password"
              placeholder="***** "
              required
              type="password"
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="text-end mt-5">
              Forgot password? <a href="/reset-password">Reset</a> now.
            </div>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default LoginPage;
