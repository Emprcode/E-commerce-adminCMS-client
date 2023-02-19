import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { CustomInputFields } from "../../components/customInputFields/CustomInputFields";
import { postAdminUser } from "../../helper/axiosHelper";
import { AdminLayout } from "../layout/AdminLayout";

const Registration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

    if (name === "password") {
      setError("");
      !/[a-z]/.test(value) && setError("At least one lower case required");
      !/[A-Z]/.test(value) && setError("At least one upper case required");
      !/[0-9]/.test(value) && setError("At least one number required");

      value.length < 6 && setError("Password must be 6 character long");
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  // console.log(form);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }

    setIsLoading(true);
    const result = await postAdminUser(rest);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <AdminLayout>
      {/* form */}
      <Container className="reg-page">
        <Form
          className="border mt-5 mb-5 p-4 rounded shadow-lg"
          onSubmit={handleOnSubmit}>
          <h3 className="mb-3 text-center">New Admin Registration</h3>
          <div className="text-center">
            {isLoading && (
              <Spinner variant="success" animation="border"></Spinner>
            )}
          </div>

          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}>
              {response.message}
            </Alert>
          )}
          {inputFields.map((item, i) => (
            <CustomInputFields key={i} {...item} onChange={handleOnChange} />
          ))}
          <Form.Text>
            {" "}
            Your Password must have at least 6 character long, Upper case, Lower
            case and number
          </Form.Text>

          {error && <div className="text-danger mb-4">{error}</div>}
          <div className="d-grid">
            <Button variant="primary" type="submit" disabled={error}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </AdminLayout>
  );
};

export default Registration;
