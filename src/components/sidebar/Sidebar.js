import React, { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarShow } from "../../system/systemSlice";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state) => state.system);

  return (
    <>
      <Offcanvas
        show={showSideBar}
        onHide={() => dispatch(setSideBarShow(false))}
      >
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
