import React, { useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSingleProductAction,
  getProductsAction,
} from "../../pages/product/productAction";

export const ProductTable = () => {
  const { products } = useSelector((state) => state.product);
  // console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteSingleProductAction({ _id }));
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between mt-5">
        <select className="mb-2">
          <option value=""> All</option>
          <option value=""> Active</option>
          <option value=""> Inactive</option>
        </select>
        <div className="fw-bold "> {products.length} items found!</div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Status</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                {
                  <img
                    src={"http://localhost:8000/" + item?.thumbnail.substr(6)}
                    width="150px"
                    alt="items"
                  />
                }
              </td>

              <td>
                <Form.Check type="switch" id="custom-switch" name="status" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}>
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
