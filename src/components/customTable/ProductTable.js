import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../pages/product/productAction";

export const ProductTable = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [displayProducts, setDisplayProducts] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    shouldFetch && dispatch(getProducts());
    setShouldFetch(false);
    setDisplayProducts(products);
  }, [products, shouldFetch, dispatch]);

  console.log(displayProducts);

  const handleOnDelete = (data) => {
    if (window.confirm("Are you sure you want to delete this item")) {
      dispatch(deleteProduct(data));
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between p-3 mt-5">
        <p>{displayProducts.length} Items found!</p>
        <div className="col-4">
          <Form.Control placeholder="search here" />
        </div>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>status</th>
              
              <th>Name</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>

                <td>
                  <Form.Check type="switch" id="custom-switch" name="status" />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="warning">Edit</Button>{" "}
                  <Button variant="danger" onClick={() => handleOnDelete()}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
