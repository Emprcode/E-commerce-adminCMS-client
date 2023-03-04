import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategories,
  updateCategoryAction,
} from "../../pages/category/categoryAction";

export const CategoryTable = () => {
  const { cats } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [displayCats, setDisplayCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState({});

  useEffect(() => {
    !displayCats.length && dispatch(getCategories());

    setDisplayCats(cats);
  }, [cats, dispatch, displayCats.length]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    //update state

    const temp = displayCats.map((item) => {
      let itm = item;
      if (item._id === selectedCat._id) {
        itm = { ...item, status: checked ? "active" : "inactive" };
      }
      return itm;
    });

    setDisplayCats(temp);

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setSelectedCat({
      ...selectedCat,
      [name]: value,
    });
  };
  const handleOnSave = () => {
    if (window.confirm("Are you sure you want to update this category")) {
      const { _id, status, name } = selectedCat;
      dispatch(updateCategoryAction({ _id, status, name }));
      setSelectedCat({});
      console.log(_id, status, name);
    }
  };
  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category")) {
      dispatch(deleteCategoryAction(_id));
    }
  };

  return (
    <div className="shadow-lg p-3">
      <div className="d-flex justify-content-between mt-5">
        <div className=""> {cats.length} items found!</div>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayCats.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="switch"
                    name="status"
                    id="custom-switch"
                    disabled={selectedCat._id === item?._id ? false : true}
                    onChange={handleOnChange}
                    checked={
                      selectedCat._id === item._id
                        ? selectedCat.status === "active"
                        : item.status === "active"
                    }
                  />

                  {/* {editId === item?._id ? (
                    <Form.Check type="switch" id="custom-switch" />
                  ) : (
                    item?.status
                  )} */}
                </td>

                <td>
                  {selectedCat._id === item?._id ? (
                    <Form.Control
                      name="name"
                      defaultValue={item.name}
                      onChange={handleOnChange}
                    />
                  ) : (
                    item?.name
                  )}
                </td>
                <td>{item?.slug}</td>
                {selectedCat._id === item?._id ? (
                  <td>
                    <Button variant="success" onClick={handleOnSave}>
                      Save
                    </Button>{" "}
                    <Button variant="info" onClick={() => setSelectedCat({})}>
                      Cancel
                    </Button>
                  </td>
                ) : (
                  <td>
                    {" "}
                    <Button
                      variant="warning"
                      onClick={() => setSelectedCat(item)}>
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleOnDelete(item._id)}>
                      Delete
                    </Button>
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
