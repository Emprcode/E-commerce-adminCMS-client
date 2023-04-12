import React from "react";
import Dashobardlayout from "../layout/Dashobardlayout";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  console.log(admin);
  return (
    <Dashobardlayout>
      <Container>
        <div>
          <h1 className=" p-4 fw-bold text-center"> The AceAttire</h1>
        </div>
      </Container>
    </Dashobardlayout>
  );
};

export default Dashboard;
