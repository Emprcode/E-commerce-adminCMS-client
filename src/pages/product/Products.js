import React from "react";
import Dashobardlayout from "../layout/Dashobardlayout";
import { Container } from "react-bootstrap";
import { ProductForms } from "../../components/formComponents/ProductForms";
import { ProductTable } from "../../components/customTable/ProductTable";

const Products = () => {
  return (
    <Dashobardlayout>
      <Container className="p-5">
        <h3 className="p-3 fw-bold text-center">Product Management</h3>
       
        {/* form */}
        <ProductForms />
        {/* table */}
        <ProductTable/>
      </Container>
    </Dashobardlayout>
  );
};

export default Products;
