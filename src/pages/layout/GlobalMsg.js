import React from "react";
import Container from "react-bootstrap/esm/Container";

const GlobalMsg = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="d-flex justify-content-between p-1">
        <div>
          <i class="fa-solid fa-phone"></i>Call 1000 MYSHOP
        </div>
        <div>
          <a href="#!">
            <i class="fa-brands fa-linkedin"></i>
          </a>{" "}
          <a href="#!">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default GlobalMsg;
