import React from "react";
import { SideBar } from "../../components/sidebar/SideBar";
import Footer from "./Footer";
import { Header } from "./Header";


const Dashobardlayout = ({ children }) => {
  return (
    <div className="">
      <Header />
      

        
          <SideBar />
          <div className="main dashbg">{children}</div>
          <Footer />
    
    </div>
  );
};

export default Dashobardlayout;
