import React from "react";
import { Container } from "react-bootstrap";
import { PaymentOptionsTable } from "../../components/customTable/PaymentOptionsTable";
import { PaymentOptionsForm } from "../../components/formComponents/PaymentOptionsForm";
import Dashobardlayout from "../layout/Dashobardlayout";

const PaymentOptions = () => {
  return (
    <Dashobardlayout>
      <Container className="mt-3 text-center">
        <h3>Payment Options</h3>
        {/* form */}
        <PaymentOptionsForm />

        {/* table */}
        <PaymentOptionsTable/>
      </Container>
    </Dashobardlayout>
  );
};

export default PaymentOptions;
