import React from "react";
import Footer from "./Footer";
import GlobalMsg from "./GlobalMsg";
import Header from "./Header";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <GlobalMsg />
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
