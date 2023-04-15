import React from "react";
import { Container } from "react-bootstrap";
import { PaymentOptionsTable } from "../../components/customTable/PaymentOptionsTable";
import { PaymentOptionsForm } from "../../components/formComponents/PaymentOptionsForm";
import Dashobardlayout from "../layout/Dashobardlayout";

const PaymentOptions = () => {
  return (
    <Dashobardlayout>
      <Container className=" p-4 text-center">
        <h2 className="fw-bold">Payment Options</h2>
        {/* form */}
        <PaymentOptionsForm />

        {/* table */}
        <PaymentOptionsTable/>
      </Container>
    </Dashobardlayout>
  );
};

export default PaymentOptions;
