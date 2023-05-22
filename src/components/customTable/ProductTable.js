import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSingleProductAction,
  getProductsAction,
} from "../../pages/product/productAction";
import { Link } from "react-router-dom";
import { getCategories } from "../../pages/category/categoryAction";

export const ProductTable = () => {
  const { products } = useSelector((state) => state.product);
  const {cats} = useSelector((state) => state.category)
  const[selectedCat, setSelectedCat] = useState('')
  console.log(cats)
  // console.log(products)

  const [listProduct, SetListProduct] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    setShouldFetch(true)
    shouldFetch && dispatch(getProductsAction()) && dispatch(getCategories());
    setShouldFetch(false)
    SetListProduct(products)
  }, [dispatch, products]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteSingleProductAction({ _id }));
    }
  };

  const handleOnFilter =(value)=> {
  value === "all" ?
      SetListProduct(products) : SetListProduct(products.filter((item) => item.parentCat === value))
   
 
  }
 
  
  return (
    <div>
      <div className="d-flex justify-content-between mt-5">
        <select className="mb-2" onChange={(e) => handleOnFilter(e.target.value)}>
        <option  value="all"> All</option>
          {
            cats.map((item)=>  <option key={item._id}  value={item._id}>{item.name}</option>)
          }
          
        </select>
        <div className="fw-bold "> {listProduct.length} items found!</div>
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
          {listProduct.map((item, i) => (
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
              <td >{item.description}</td>
              <td className="col-2">
                <Link to={`/products/${item._id}`}>
                <Button variant="warning" >Edit</Button></Link>{" "}
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
