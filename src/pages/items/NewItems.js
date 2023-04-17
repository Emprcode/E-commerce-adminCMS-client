import React, { useState } from "react";
import Dashobardlayout from "../layout/Dashobardlayout";
import { CustomInpute } from "../../components/customInpute/CustomInpute";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postItemsAction } from "./ItemsAction";

export const NewItems = () => {
  const [formDt, SetFormDt] = useState({});

  const dispatch = useDispatch()
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
      required: "true",
    },
    {
      name: "images",
      label: "Images",
      type: "file",
      multiple: true,
      required: "true",
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
    const {images, ...rest} = formDt;

 
    dispatch(postItemsAction(rest))
  };

  return (
    <Dashobardlayout>
      <Container className="p-4">
        <div className="py-3 fs-2">New Product</div>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          {inputes.map((item, i) => (
            <CustomInpute key={i} {...item} onChange={handleOnChange} />
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
