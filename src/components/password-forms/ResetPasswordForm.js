import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CustomInputFields } from "../customInputFields/CustomInputFields";

export const ResetPasswordForm = () => {
  const [error, setError] = useState("Length is not enough");
  const inputFields = [
    {
      label: "OTP",
      name: "otp",
      type: "number",
      placeholder: "123456",
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

  return (
    <div className="border py-5 p-3 mt-5 rounded shadow-lg">
      <Button variant="success"> &lt; Back</Button>
      <h3 className="text-center">Reset New Password</h3>
      <hr />
      <Form>
        {inputFields.map((item, i) => (
          <CustomInputFields key={i} {...item} />
        ))}
        <Form.Text>
          your password must contain at least 6 character with number, Upper
          case and lower case
        </Form.Text>
        {error && <div className="text-danger fw-bolder my-3">{error}</div>}
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Reset Password
          </Button>
        </div>
      </Form>
    </div>
  );
};
