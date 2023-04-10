import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentOptions } from "../../pages/payment-options/paymentOptionsAction";

export const PaymentOptionsTable = () => {
  const { paymentOption } = useSelector((state) => state.paymentOptions);
  const dispatch = useDispatch();
  const [shouldFetch, setShouldFetch] = useState(true);

  const [displayPaymentOption, setDisplayPaymentOption] = useState([]);

  //use useEffect to fetch data
  useEffect(() => {
    // !displayPaymentOption && dispatch(getPaymentOptions());
    shouldFetch && dispatch(getPaymentOptions());
    setShouldFetch(false);

    setDisplayPaymentOption(paymentOption);
  }, [paymentOption, shouldFetch, dispatch]);

  console.log(paymentOption)
  return (
    <div className="shadow-lg mt-3 ">
      {/* <h2>Payment Options Available</h2> */}
      <div className="d-flex justify-content-between p-3">
        <div className="fw-bold">
          {" "}
          {displayPaymentOption.length} items found
        </div>
        <div>
          <Form.Control placeholder="search here" />
        </div>
      </div>
      <hr />
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Payment Options</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayPaymentOption?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};
