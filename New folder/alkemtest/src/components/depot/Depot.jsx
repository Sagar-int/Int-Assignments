import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup, ListGroup, Spinner } from "react-bootstrap";
import { DataContext } from "../../contexts/DataContext.jsx";
import AXIOS from "../../shared/api.js";

export const Depot = () => {
  const { handleDepot, depot, division, distributor } = useContext(DataContext);
  const [data, setData] = useState("");
  const dist_id = distributor?.customer_code;
  const div_code = division?.division_code;

  useEffect(() => {
    AXIOS.get(`/api/feed/dist_depot/E?dist_id=${dist_id}&dc=${div_code}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Error--->", err);
      });
  }, [division]);

  // console.log("Depot====>", depot);

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Serach Depot" />
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

      <ul>
        {data ? (
          data.map((ele, i) => {
            return (
              <>
                <li
                  key={i}
                  onClick={(e) => {
                    handleDepot(ele);
                  }}
                >
                  <input type="radio" name="location_name" id={i} />
                  <label htmlFor={i}>{ele.location_name}</label>
                </li>
                <hr />
              </>
            );
          })
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </ul>
    </div>
  );
};
