import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../pages/product/productAction";

export const ProductTable = () => {
  const { product } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const { displayProduct, setDisplayProducts } = useState([]);

  useEffect(() => {
    dispatch(getproducts());
    setDisplayProducts(product);
  }, [dispatch, product]);

  console.log(getproducts);
  return (
    <div className="shadow-lg p-4 mt-5">
      <div className="d-flex justify-content-between p-3">
        <p className="fw-bold">10 items found!</p>
        <div>
          <Form.Control placeholder="search here" />
        </div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Product Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayProduct.map((item, i) => {
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
};
