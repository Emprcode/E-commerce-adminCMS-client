import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarShow } from "../../system/systemSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.system);
  return (
    <>
      {/* <Button variant="primary" >
        Launch
      </Button> */}

      <Offcanvas
        show={showSidebar}
        onHide={() => dispatch(setSidebarShow(false))}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
