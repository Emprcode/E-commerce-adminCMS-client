import React from "react";
import Container from "react-bootstrap/esm/Container";

const GlobalMsg = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="d-flex justify-content-between p-1">
        <div>
          <i className="fa-solid fa-phone"></i> Call 1000 MYSHOP
        </div>
        <div>
          <a href="#!">
            <i className="fa-brands fa-linkedin text-light "></i>
          </a>{" "}
          <a href="#!">
            <i className="fa-solid fa-envelope text-light"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default GlobalMsg;
