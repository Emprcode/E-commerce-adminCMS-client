import React from "react";
import "./Dashboard.css";
import Dashobardlayout from "../layout/Dashobardlayout";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Chart } from "./Chart";

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
          <Col className="card1 p-3 rounded">
            <div>
              <div className="d-flex justify-content-around">
                <p className="p-2">
                  Weekly Sales <i class="fa-solid fa-chart-mixed"></i>
                </p>
              </div>

              <h4 className="fw-bold"> $ 50,000</h4>
              <p className="p-3">Increased by 40%</p>
            </div>
          </Col>
          <Col className="card2 p-3 rounded">
            <div>
              <div className="d-flex justify-content-around">
                <p className="p-2">
                  Weekly orders <i class="fa-solid fa-chart-mixed"></i>
                </p>
              </div>

              <h4 className="fw-bold">24,567</h4>
              <p className="p-3">Decreased by 10%</p>
            </div>
          </Col>
          <Col className="card3 p-3 rounded">
            <div>
              <div className="d-flex justify-content-around">
                <p className="p-2">
                  Visitors online <i class="fa-solid fa-chart-mixed"></i>
                </p>
              </div>

              <h4 className="fw-bold"> 98,895</h4>
              <p className="p-3">Increased by 20%</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Chart />
        </Row>
      </Container>
    </Dashobardlayout>
  );
};

export default Dashboard;
