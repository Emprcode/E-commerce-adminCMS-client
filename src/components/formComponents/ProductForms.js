import { useRef } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../pages/product/productAction";

export const ProductForms = () => {
  const dispatch = useDispatch();
  const productRef = useRef("");
  const descriptionRef = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const product = productRef.current.value;
    dispatch(addNewProduct({ name: product }));
    console.log(product);
  };

  return (
    <div className="py-5 rounded shadow-lg p-3">
      <Form onSubmit={handleOnSubmit}>
        <Row className="m-3">
          <Col className="col-3">
            <Form.Control
              placeholder="First name"
              ref={productRef}
              required
              name="name"
            />
          </Col>
          <Col className="col-5">
            <Form.Control
              placeholder="Description"
              ref={descriptionRef}
              required
              name="description"
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
