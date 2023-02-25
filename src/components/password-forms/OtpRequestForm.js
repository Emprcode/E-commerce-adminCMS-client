import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { fetchReqOtp } from "../../helper/axiosHelper";

export const OtpRequestForm = ({ reqOtp }) => {
  const emailRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const data = await fetchReqOtp({ email });
    console.log(data);
  };
  return (
    <div className="border py-5 p-3 mt-5 rounded shadow-lg">
      <h3 className="text-center">Request OTP</h3>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3 fw-bold">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            ref={emailRef}
          />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Request OTP
          </Button>
        </div>
      </Form>
    </div>
  );
};
