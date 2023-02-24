import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

export const OtpRequestForm = () => {
  const emailRef = useRef("");
  return (
    <div className="border py-5 p-3 mt-5 rounded shadow-lg">
      <h3 className="text-center">Request OTP</h3>
      <hr />
      <Form>
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
