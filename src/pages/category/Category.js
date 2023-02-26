import React from "react";
import { Container } from "react-bootstrap";

import Dashobardlayout from "../layout/Dashobardlayout";
import { CategoryForms } from "../../components/categoryComponents/CategoryForms";
import { CategoryTable } from "../../components/customTable/CategoryTable";
const Category = () => {
  return (
    <Dashobardlayout>
      <Container className="mt-5">
        <h3>Category Management</h3>
        <hr />
        <CategoryForms />

        {/* table */}
        <CategoryTable />
      </Container>
    </Dashobardlayout>
  );
};

export default Category;
