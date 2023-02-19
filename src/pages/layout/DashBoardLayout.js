import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import Footer from "./Footer";
import Header from "./Header";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;
