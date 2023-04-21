import React, { useEffect } from 'react'
import { Button, Table, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsAction } from '../../pages/items/ItemsAction'


export const ItemsTable = () => {

  const { items } = useSelector((state) => state.item)
  console.log(items)

  const dispatch = useDispatch()

useEffect(()=> {
  dispatch(getItemsAction())
}, [dispatch])

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
              <th>Thumbnail</th>
              <th>status</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{
                  <img src={"http://localhost:8000/" + item?.thumbnail.substr(6)} width="150px" alt='items'/>
                  }</td>

                <td>
                  <Form.Check type="switch" id="custom-switch" name="status" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="warning">Edit</Button>{" "}
                  <Button variant="danger">Delete</Button>{" "}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}
