import React from "react";
import { Form } from "react-bootstrap";

export const CustomInputFields = ({ label, forwardref, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control ref={forwardref} {...rest} />
    </Form.Group>
  );
};
