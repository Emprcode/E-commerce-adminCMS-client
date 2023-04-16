import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSideBarShow } from "../../system/systemSlice";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state) => state.system);

  return (
    <>
      <Offcanvas
        show={showSideBar}
        onHide={() => dispatch(setSideBarShow(false))}
        className={"bg-dark"}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>Admin Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sidebar-menu">
            <li>
              <i className="fa-solid fa-house"></i>{" "}
              <Link onClick={() => dispatch(setSideBarShow(false))} to="/dashboard">Dashboard</Link>{" "}
            </li>
            <li>
              <i className="fa-solid fa-boxes-stacked"></i>{" "}
              <Link onClick={() => dispatch(setSideBarShow(false))} to="/category">Category Management</Link>{" "}
            </li>
            <li>
              <i className="fa-solid fa-box"></i>{" "}
              <Link onClick={() => dispatch(setSideBarShow(false))} to="/products">Products Management</Link>{" "}
            </li>
            <li>
              <i className="fa-solid fa-bag-shopping"></i>{" "}
              <Link  onClick={() => dispatch(setSideBarShow(false))} to="/orders">Orders</Link>{" "}
            </li>
            <li>
              <i className="fa-solid fa-credit-card"></i>{" "}
              <Link onClick={() => dispatch(setSideBarShow(false))} to="/payment-options">Payment Options</Link>{" "}
            </li>
            <li>
              <i className="fa-solid fa-users"></i>
              <Link onClick={() => dispatch(setSideBarShow(false))} to="/customers">Customer Management</Link>{" "}
            </li>
            <li>
              <i className="fa-solid fa-gear"></i>{" "}
              <Link onClick={() => dispatch(setSideBarShow(false))} to="/setting">Setting</Link>{" "}
            </li>
          </ul>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
