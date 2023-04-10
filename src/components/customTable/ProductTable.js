import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../pages/product/productAction";

export const ProductTable = () => {
  const { products } = useSelector((state) => state.product);
  console.log(products);
  const dispatch = useDispatch();

  const { displayProducts, setDisplayProducts } = useState([]);

  useEffect(() => {
    !displayProducts.length && dispatch(getProducts());
    setDisplayProducts(products);
  }, [dispatch, products, setDisplayProducts]);

  console.log(displayProducts);
  return (
    <div className="shadow-lg p-4 mt-5">
      <div className="d-flex justify-content-between p-3">
        <p className="fw-bold">10 items found!</p>
        <div>
          <Form.Control placeholder="search here" />
        </div>
      </div>
      <hr />
      {/* <Table striped bordered hover>
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
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </div>
  );
};
