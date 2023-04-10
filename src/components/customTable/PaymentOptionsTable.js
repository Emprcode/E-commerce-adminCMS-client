import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deletePaymentOptions, getPaymentOptions } from "../../pages/payment-options/paymentOptionsAction";

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



  const handleOnDelete = (_id) => {
   if(window.confirm("Are you sure you want to delete this item?")){
    dispatch(deletePaymentOptions(_id))
   }
  }
  console.log(paymentOption)
  return (
    <Container className="shadow-lg mt-3 ">
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
                <td>
                  <Button variant="warning">Edit</Button>{" "}
                  <Button variant="danger" onClick={() => handleOnDelete(item._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
