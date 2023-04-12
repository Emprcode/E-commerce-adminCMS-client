import React from "react";
import "./Dashboard.css";
import Dashobardlayout from "../layout/Dashobardlayout";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  console.log(admin);
  return (
    <Dashobardlayout>
      <Container className="p-4">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">
            {" "}
            <i className="fa-solid fa-house"></i> Dashboard
          </div>
          <div>
            OverView <i className="fa-solid fa-circle-exclamation"></i>
          </div>
        </div>
        <Row className=" p-4 gap-5 ">
          <Col className="card1">sdad</Col>
          <Col className="card2">adsad</Col>
          <Col className="card3">adsa</Col>
        </Row>
      </Container>
    </Dashobardlayout>
  );
};

export default Dashboard;
