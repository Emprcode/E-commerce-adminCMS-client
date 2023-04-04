import { useRef } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const ProductForms = () => {
  const productRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const product = productRef.current.value;
    console.log(product);
  };

  return (
    <div className="py-5 rounded shadow-lg p-3">
      <Form onSubmit={handleOnSubmit}>
        <Row className="m-3">
          <Col className="col-8">
            <Form.Control
              placeholder="First name"
              ref={productRef}
              required
              name="name"
            />
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add
              </Button>
            </div>{" "}
          </Col>
        </Row>
      </Form>
    </div>
  );
};
