import React from "react";
import { Container } from "react-bootstrap";

import Dashobardlayout from "../layout/Dashobardlayout";
import { CategoryForms } from "../../components/formComponents/CategoryForms";
import { CategoryTable } from "../../components/customTable/CategoryTable";
const Category = () => {
  return (
    <Dashobardlayout>
      <Container className="p-5">
        <h3 className="text-center mb-3 fw-bold ">Category Management</h3>
    
        <CategoryForms />

        {/* table */}
        <CategoryTable />
      </Container>
    </Dashobardlayout>
  );
};

export default Category;
