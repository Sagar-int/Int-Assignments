import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup, ListGroup, Spinner } from "react-bootstrap";
import { DataContext } from "../../contexts/DataContext.jsx";
import AXIOS from "../../shared/api.js";

export const Distributor = () => {
  const [data, setData] = useState("");
  const { handleUserId , userId} = useContext(DataContext);

  useEffect(() => {
    AXIOS.get("/api/distributor/distributor_list/E?dn=&page_no=1")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Error--->", err);
      });
  }, []);

  console.log("userId====>", userId);

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Serach Distributor" />
        <Button size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Button>
      </InputGroup>

      <ListGroup>
        {data ? (
          data.map((ele, i) => {
            return (
              <ListGroup.Item>
                <Form.Check
                  type="radio"
                  onClick={(e)=>{handleUserId(ele.customer_code)}}
                  label={
                    ele.customer_name + "-" + ele.customer_code + " " + "("+ ele.location + ")"
                  }
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </ListGroup.Item>
            );
          })
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </ListGroup>
    </div>
  );
};
