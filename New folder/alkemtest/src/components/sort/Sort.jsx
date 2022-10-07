import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { DataContext } from "../../contexts/DataContext";
import AXIOS from "../../shared/api.js";

export const Sort = () => {
  const {
    distributor,
    division,
    depot,
    priceIndex,
    setProdList,
    setListCount,
    setText,
    setShow,
    setPriceIndex
  } = useContext(DataContext);

  const dist_id = distributor?.customer_code;
  const div_code = division?.division_code;
  const cfa_code = depot?.cfa_code;

  const arr = ["None", "Price : Low to High", "Price : High to Low"];
  

  const sortProducts = (sort_value) => {
    if (sort_value === 0) {
      AXIOS.get(
        `/api/product/all_product_list/E/${cfa_code}?dist_id=${dist_id}&page=1&sv=&div_code=${div_code}&product_nm=`
      )
        .then((res) => {
          setProdList(res.data.data);
          setListCount(res.data.count.count);
          setText("");
          setPriceIndex(sort_value);
          setShow(false);
        })
        .catch((err) => {
          console.log("Error--->", err);
        });
    } else {
      AXIOS.get(
        `/api/product/all_product_list/E/${cfa_code}?dist_id=${dist_id}&page=1&sv=${
          sort_value - 1
        }&div_code=${div_code}&product_nm=`
      )
        .then((res) => {
          setProdList(res.data.data);
          setListCount(res.data.count.count);
          setText("");
          setPriceIndex(sort_value);
          setShow(false);
        })
        .catch((err) => {
          console.log("Error--->", err);
        });
    }
  };


  return (
    <div>
      <ul>
        {arr.map((ele, i) => {
          return (
            <>
              <li
                key={i}
                onClick={() => {
                  sortProducts(i);
                }}
              >
                <Form.Check
                  type="radio"
                  label={` ${ele}`}
                  defaultChecked={i === priceIndex}
                />
              </li>
              <hr />
            </>
          );
        })}

        {/* <li
          onClick={() => {
            sortProducts(null);
          }}
        >
          <input type="radio" name="none" id="none" />
          <label htmlFor="none">None</label>
          <Form.Check
            type="radio"
            label={`None`}
            defaultChecked={ele.cfa_code === depot?.cfa_code}
          />
        </li> */}
        {/* <li
          onClick={() => {
            sortProducts(0);
          }}
        >
          <input type="radio" name="low_to_high" id="low_to_high" />
          <label htmlFor="low_to_high">Price : Low to High</label>
        </li>
        <li
          onClick={() => {
            sortProducts(1);
          }}
        >
          <input type="radio" name="high_to_low" id="high_to_low" />
          <label htmlFor="high_to_low">Price : High to Low</label>
        </li> */}
      </ul>
    </div>
  );
};
