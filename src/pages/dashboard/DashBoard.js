import React, { useState } from "react";
import "./Dashboard.css";
import Dashobardlayout from "../layout/Dashobardlayout";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { UserData } from "./charts/DataSet";
import { BarChart } from "./charts/BarChart";
import { PieChart } from "./charts/PieCharts";

const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  console.log(admin);

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Australia",
        data: UserData.map((data) => data.Australia),
        backgroundColor: ["rgba(154, 85, 255, 1)"],
        borderColor: "black",
        borderWidth: 0,
      },
      {
        label: "USA",
        data: UserData.map((data) => data.USA),
        backgroundColor: ["rgba(254, 112, 150, 1)"],
        borderColor: "black",
        borderWidth: 0,
      },
      {
        label: "Europe",
        data: UserData.map((data) => data.Europe),
        backgroundColor: ["rgba(54, 215, 232, 1)"],
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  });
  return (
    <Dashobardlayout>
      <div className="dashcolor">
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
          <Row className=" mt-5 p-4 gap-5 ">
            <Col className="bg-light rounded p-4 shadow-lg">
              <div>
                <h6 className="fw-bold tect-center p-2">
                  {" "}
                  Visit And Sales Statistics
                </h6>
              </div>
              <BarChart chartData={userData} />
            </Col>
            <Col className="bg-light text-center rounded p-4 shadow-lg">
              <div>
                <h6 className="fw-bold tect-center p-2"> Traffic Sources</h6>
              </div>
              <div
                style={{ width: 300, height: 350 }}
                className="d-flex align-items-center mx-5">
                <PieChart />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Dashobardlayout>
  );
};

export default Dashboard;
