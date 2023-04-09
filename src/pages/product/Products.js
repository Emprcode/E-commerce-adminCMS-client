import React from "react";
import Dashobardlayout from "../layout/Dashobardlayout";
import { Container } from "react-bootstrap";
import { ProductForms } from "../../components/formComponents/ProductForms";
import { ProductTable } from "../../components/customTable/ProductTable";

const Products = () => {
  return (
    <Dashobardlayout>
      <Container>
        <h3 className="mt-3 text-center">Product Management</h3>
        <hr />
        {/* form */}
        <ProductForms />
        {/* table */}
        <ProductTable/>
      </Container>
    </Dashobardlayout>
  );
};

export default Products;
