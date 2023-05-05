import React from 'react'
import { Form } from 'react-bootstrap'

export const CustomDropDown = ({args, func, name}) => {
  return (
    <Form.Group>
    <Form.Select name={name} required onChange={func} >
            <option value=""> Select Category</option>
            {args.length > 0 &&
              args.map(({ _id, name, status }) => (
                <option disabled={status === "inactive"} value={_id}>
                  {name}
                </option>
              ))}
          </Form.Select>
          </Form.Group>
  )
}
