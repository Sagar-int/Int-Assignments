import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Toast } from "react-bootstrap";
import { DataContext } from "../../contexts/DataContext";
import { CustomModal } from "../modal/CustomModal";
import "./productpage.css";
import AXIOS from "../../shared/api.js";

export const ProductPage = () => {
  const {
    distributor,
    division,
    depot,
    handleShow,
    handleDistributor,
    handleDivision,
    handleDepot,
    prodList,
    setProdList,
    listCount,
    setListCount,
    text,
    setText,
  } = useContext(DataContext);

  const dist_id = distributor?.customer_code;
  const div_code = division?.division_code;
  const cfa_code = depot?.cfa_code;

  useEffect(() => {
    if (dist_id && div_code && cfa_code) {
      AXIOS.get(
        `/api/product/all_product_list/E/${cfa_code}?dist_id=${dist_id}&page=1&sv=&div_code=${div_code}&product_nm=`
      )
        .then((res) => {
          setProdList(res.data.data);
          setListCount(res.data.count.count);
          setText("");
        })
        .catch((err) => {
          console.log("Error--->", err);
        });
    }
  }, [depot]);

  //For Searching the Product
  useEffect(() => {
    const getData = setTimeout(() => {
      AXIOS.get(
        `/api/product/all_product_list/E/${cfa_code}?dist_id=${dist_id}&page=1&sv=&div_code=${div_code}&product_nm=${text}`
      )
        .then((res) => {
          setProdList(res.data.data);
          setListCount(res.data.count.count);
        })
        .catch((err) => {
          console.log("Error--->", err);
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [text]);

  //managing states for Toast
  const [show, setShow] = useState(-1);

  const toggleShow = (index) => setShow(index);

  return (
    <>
      <div className="top_div">
        <h3>
          Products <span>(Total: {listCount ? listCount : 0})</span>
        </h3>
      </div>

      <Container fluid="lg" className="prod_container">
        <Row>
          <Col xs={12} sm={3} className="prod_cols">
            <Button
              onClick={() => handleShow("Select Distributor")}
              variant="outline-secondary"
              size="lg"
            >
              {distributor ? distributor.customer_name : "Select Distributor"}
            </Button>

            {distributor ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={() => {
                  handleDistributor(null);
                }}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
          </Col>

          <Col xs={12} sm={2} className="prod_cols">
            <Button
              onClick={() => handleShow("Select Division")}
              variant="outline-secondary"
              size="lg"
              disabled={!distributor}
            >
              {division ? division.division_name : "Select Division"}
            </Button>
            {division ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={(e) => {
                  handleDivision(null);
                }}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
          </Col>

          <Col xs={12} sm={2} className="prod_cols">
            <Button
              onClick={() => handleShow("Select Depot")}
              variant="outline-secondary"
              size="lg"
              disabled={!division}
            >
              {depot ? depot.location_name : "Select Depot"}{" "}
            </Button>

            {depot ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={(e) => {
                  handleDepot(null);
                }}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
          </Col>

          <Col xs={12} sm={3} className="prod_cols">
            <input
              placeholder="Search by Products/Code/Composition"
              onChange={(event) => setText(event.target.value)}
              disabled={!depot}
              value={text}
            />
          </Col>
          <Col xs={6} sm={1} className="prod_filter_cols">
            <Button
              onClick={() => handleShow("Sort")}
              className="filter_btn"
              variant="outline-secondary"
              size="lg"
              disabled={!prodList}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3839/3839020.png"
                alt="filter"
                width="25"
                height="25"
              />
            </Button>
          </Col>
        </Row>

        <CustomModal />
      </Container>
      <br />

      {prodList ? (
        prodList.length > 0 ? (
          prodList.map((ele, i) => {
            return (
              <Container key={i} fluid="lg" className="prod_list_container">
                <Row>
                  <Col xs={12} sm={10} className="prod_list_cols">
                    <h5>
                      {ele.product_name} ({ele.pro_code})
                    </h5>
                  </Col>
                  <Col xs={12} sm={2} className="prod_list_cols">
                    <h5>PTS: ₹ {ele.ptd}/-</h5>
                  </Col>
                </Row>
                <hr />
                <br />

                <Row>
                  <Col xs={12} sm={4} className="prod_list_cols">
                    <p>Case Qty : {ele.box_case_qty}</p>
                  </Col>
                  <Col xs={12} sm={3} className="prod_list_cols">
                    <p>Unit qty : 1</p>
                  </Col>
                  <Col xs={12} sm={3} className="prod_list_cols">
                    <p>Packing : {ele.unit_description}</p>
                  </Col>
                  <Col xs={12} sm={2} className="prod_list_cols">
                    <Button
                      onClick={() =>
                        show === i ? toggleShow(-1) : toggleShow(i)
                      }
                      variant="link"
                    >
                      {show === i ? "Hide Details" : "More Details"}
                    </Button>
                  </Col>
                </Row>

                <Row>
                  <Toast
                    className="toast_div"
                    show={show === i}
                    onClose={() => toggleShow(-1)}
                  >
                    <Toast.Body>
                      <div className="toast_flex">
                        <div>
                          <p>Division :</p>
                          <p>Composition :</p>
                        </div>
                        <div>
                          <p>{ele.division_name}</p>
                          <p>{ele.composition}</p>
                        </div>
                      </div>
                    </Toast.Body>
                  </Toast>
                </Row>
              </Container>
            );
          })
        ) : (
          <h5 className="not_found">No Records Found</h5>
        )
      ) : (
        <h4 className="not_found">Select the requirements</h4>
      )}
    </>
  );
};
