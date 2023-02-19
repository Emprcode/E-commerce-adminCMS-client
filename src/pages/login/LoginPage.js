import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { CustomInputFields } from "../../components/customInputFields/CustomInputFields";
import { AdminLayout } from "../layout/AdminLayout";

const LoginPage = () => {
  const inputFields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "email@email.com",
      required: true,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
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
