import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const CategoryTable = () => {
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="success">Save</Button>
                <Button variant="info">Cancel</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
