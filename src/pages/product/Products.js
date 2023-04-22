import React from "react";
import Dashobardlayout from "../layout/Dashobardlayout";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductTable } from "../../components/customTable/ProductTable";

const Items = () => {
  return (
    <Dashobardlayout>
      <Container>
        <div className="product py-3">
          <h4 className="text-center fw-bold mt-4"> Product/Items</h4>
        </div>

        <div className="text-end">
          <Link to="/product/newproducts">
            <Button variant="warning">
              <i class="fa-solid fa-plus"></i>Add new items
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

export default Items;
