import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { CustomInputFields } from "../../components/customInputFields/CustomInputFields";
import { AdminLayout } from "../layout/AdminLayout";

const Registration = () => {
  const [form, setForm] = useState({});
  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Cristiano ",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Ronaldo",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "email@email.com",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "0123456789",
      // required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Sydney",
      required: true,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*******",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <AdminLayout>
      {/* form */}
      <Container className="reg-page">
        <Form
          className="border mt-5 mb-5 p-4 rounded shadow-lg"
          onSubmit={handleOnSubmit}>
          <h3 className="mb-3 text-center">New Admin Registration</h3>
          {inputFields.map((item, i) => (
            <CustomInputFields key={i} {...item} onChange={handleOnChange} />
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

export default Registration;
