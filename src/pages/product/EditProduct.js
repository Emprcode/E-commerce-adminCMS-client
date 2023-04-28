import React, { useEffect, useState } from "react";
import Dashobardlayout from "../layout/Dashobardlayout";
import { CustomInpute } from "../../components/customInpute/CustomInpute";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postProductAction } from "./productAction";
import { Link, useParams } from "react-router-dom";

export const EditProduct = () => {
  const [formDt, SetFormDt] = useState({});
  const [newImages, setNewImages] = useState([]);
  const { cats } = useSelector((state) => state.category);
  console.log(cats);

  const dispatch = useDispatch();
  const {_id} = useParams()

  const inputes = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "abc",
      required: true,
    },
    {
      name: "sku",
      label: "Sku",
      type: "text",
      placeholder: "SAM-TV-8",
      required: true,
    },
    {
      name: "qty",
      label: "Qty",
      type: "number",
      placeholder: "1234",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "9856",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "date",
      placeholder: "12234",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "date",
    },
    {
      name: "description",
      label: "Description",
      as: "textarea",
      rows: "10",
      placeholder: "write info here",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      type: "file",
      multiple: true,
      required: true,
      accept: "image/*",
    },
  ];

  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    SetFormDt({
      ...formDt,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in formDt) {
      formData.append(key, formDt[key]);
    }
    newImages.length &&
      [...newImages].map((item) => formData.append("images", item));
    // console.log(newImages.length);
    dispatch(postProductAction(formData));
  };

  const handleOnImageUpload = (e) => {
    const { files } = e.target;
    setNewImages(files);
  };

  return (
    <Dashobardlayout>
      <Container className="p-4 w-50 rounded border">
        <Link to="/products">
          <Button variant="secondary">
            <i className="fa-solid fa-arrow-left"></i>
          </Button>
        </Link>
        <div className="py-3 fs-2">Edit Product</div>
        <hr />
        <Form.Group>
          <Form.Select name="parentCat" onChange={handleOnChange} required>
            <option value=""> Select Category</option>
            {cats.length > 0 &&
              cats.map(({ _id, name, status }) => (
                <option disabled={status === "inactive"} value={_id}>
                  {name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        <Form onSubmit={handleOnSubmit}>
          {inputes.map((item, i) => (
            <CustomInpute
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handleOnImageUpload : handleOnChange
              }
            />
          ))}
          <div className="d-grid">
            <Button type="submit" variant="info">
              {" "}
              Add Product
            </Button>
          </div>
        </Form>
      </Container>
    </Dashobardlayout>
  );
};
