import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { addNewPaymentOptions } from "../../pages/payment-options/paymentOptionsAction";
import { useDispatch } from "react-redux";

export const PaymentOptionsForm = () => {
  const dispatch = useDispatch();
  const paymentOptionRef = useRef("");
  const descriptionRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: paymentOptionRef.current.value,
      description: descriptionRef.current.value,
    };
    console.log(obj);
    dispatch(addNewPaymentOptions(obj));
  };
  return (
    <div className="border py-5 rounded shadow-lg p-3">
      <Form onSubmit={handleOnSubmit}>
        <Row className="mt-3">
          <Col md="5">
            <Form.Control ref={paymentOptionRef} placeholder="Payment Option" required />
          </Col>
          <Col md="5">
            <Form.Control ref={descriptionRef} placeholder="Description" required />
          </Col>
          <Col md="2" className="d-grid">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
