import React from 'react'
import { Button, Table, Form } from 'react-bootstrap'


export const ItemsTable = ({ items = []}) => {
  return (
    <div>
        <select className='mb-2'>
<option value=""> All</option>
<option value=""> Active</option>
<option value=""> Inactive</option>

        </select>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>status</th>
              <th>Name</th>
              <th>Price</th>
              <th>Sales Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>

                <td>
                  <Form.Check type="switch" id="custom-switch" name="status" />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="warning">Edit</Button>{" "}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}
