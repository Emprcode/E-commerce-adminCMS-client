import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const CategoryTable = () => {
  const { cats } = useSelector((state) => state.category);

  const [editId, setEditId] = useState("");
  return (
    <div className="shadow-lg p-3">
      <div className="d-flex justify-content-between mt-5">
        <div className=""> 10 items found!</div>
        <div>
          <Form.Control placeholder="search here" />
        </div>
      </div>
      <hr />

      <div className="">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    disabled={editId !== item?._id}
                  />

                  {/* {editId === item?._id ? (
                    <Form.Check type="switch" id="custom-switch" />
                  ) : (
                    item?.status
                  )} */}
                </td>

                <td>
                  {editId === item?._id ? (
                    <Form.Control defaultValue={item.name} />
                  ) : (
                    item?.name
                  )}
                </td>
                <td>{item?.slug}</td>
                {editId === item?._id ? (
                  <td>
                    <Button variant="success">Save</Button>{" "}
                    <Button variant="info" onClick={() => setEditId("")}>
                      Cancel
                    </Button>
                  </td>
                ) : (
                  <td>
                    {" "}
                    <Button
                      variant="warning"
                      onClick={() => setEditId(item?._id)}>
                      Edit
                    </Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
