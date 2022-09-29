import { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { DataContext } from "../../contexts/DataContext";
import { CustomModal } from "../modal/CustomModal";
import "./productpage.css";

export const ProductPage = () => {
  const { show, handleShow } = useContext(DataContext);

  return (
    <>
      <div className="top_div">
        <h3>
          Products <span>(Total: 0)</span>
        </h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut
        similique dignissimos quod cupiditate earum, impedit facilis nihil
        adipisci ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit placeat maxime laborum harum amet. Maxime illo sapiente
        aspernatur quo consequatur hic nulla, sint atque nam, quidem error porro
        perferendis sed id itaque, voluptatum autem vel facere cupiditate vitae
        sit. Perspiciatis consectetur amet delectus dolor praesentium. Porro eum
        quidem praesentium ducimus.
      </div>

      <Container fluid="lg" className="prod_container">
        <Row>
          <Col
            xs={12}
            sm={3}
            className="prod_cols"
            onClick={() => handleShow("Select Distributor")}
          >
            <Form.Control
              type="text"
              placeholder="Select Distributor"
              aria-label="Disabled input example"
              disabled
              readOnly
              style={{ backgroundColor: "#ffff", border: "none" }}
            />
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
          </Col>
          <Col
            xs={12}
            sm={2}
            className="prod_cols"
            onClick={() => handleShow("Select Division")}
          >
            <Form.Control
              type="text"
              placeholder="Select Division"
              aria-label="Disabled input example"
              disabled
              readOnly
              style={{ backgroundColor: "#ffff", border: "none" }}
            />
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
          </Col>
          <Col
            xs={12}
            sm={2}
            className="prod_cols"
            onClick={() => handleShow("Select Depot")}
          >
            <Form.Control
              type="text"
              className="form_control_bg"
              placeholder="Select Depot"
              aria-label="Disabled input example"
              disabled
              readOnly
              style={{ backgroundColor: "#ffff", border: "none" }}
            />
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
          </Col>
          <Col xs={12} sm={4} className="prod_cols">
            <Form.Control
              type="text"
              placeholder="Search by Products/Code/Composition"
              aria-label="Disabled input example"
              disabled
              readOnly
              style={{ backgroundColor: "#ffff", border: "none" }}
            />
          </Col>
        </Row>

        <CustomModal />
      </Container>
    </>
  );
};
