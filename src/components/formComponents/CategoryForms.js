import React, { useRef } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postNewCategory } from "../../pages/category/categoryAction";

export const CategoryForms = () => {
  const dispatch = useDispatch();
  const catRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const category = catRef.current.value;
    dispatch(postNewCategory({ name: category }));
  };
  return (
    <div className="border py-5 rounded shadow-lg p-3">
      <Form onSubmit={handleOnSubmit}>
        <Row className="mb-3 mt-3">
          <Col md="8">
            <input
              ref={catRef}
              placeholder="Category Name "
              required
              name="name"
              className="form-control"
            />
          </Col>
          <Col md="4">
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
