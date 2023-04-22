import React from "react";
import Dashobardlayout from "../layout/Dashobardlayout";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductTable } from "../../components/customTable/ProductTable";

const Products = () => {
  return (
    <Dashobardlayout>
      <Container>
        <div className="product py-3">
          <h4 className="text-center fw-bold mt-4"> Product/Items</h4>
        </div>

        <div className="text-end">
          <Link to="/products/newproduct">
            <Button variant="warning">
              <i class="fa-solid fa-plus"></i>Add new Product
            </Button>
          </Link>
        </div>
        <hr />
        {/* Table */}
        <ProductTable />
      </Container>
    </Dashobardlayout>
  );
};

export default Products;
