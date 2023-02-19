import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { CustomInputFields } from "../../components/customInputFields/CustomInputFields";
import { AdminLayout } from "../layout/AdminLayout";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../admin-user/adminUserAction";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const inputFields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "email@email.com",
      required: true,
      forwardref: emailRef,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
      forwardref: passwordRef,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const loginObj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(loginObj);

    dispatch(loginAdmin(loginObj));

    // result?._id && navigate("/dashboard");
  };

  return (
    <AdminLayout>
      {/* form */}
      <Container className="reg-page">
        <Form
          className="border mt-5 mb-5 p-4 rounded shadow-lg"
          onSubmit={handleOnSubmit}>
          <h3 className="mb-3 text-center">Login Admin</h3>
          {inputFields.map((item, i) => (
            <CustomInputFields key={i} {...item} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </AdminLayout>
  );
};

export default LoginPage;
