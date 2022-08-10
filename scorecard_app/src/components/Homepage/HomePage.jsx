import { Col, Container, Row } from "react-bootstrap";
import { ScolasticArea } from "../ScolasticArea/ScolasticArea";
import "./homepage.css";

export const HomePage = () => {
  return (
    <Container fluid="md" className="main_container">
      <Row>
        <Col className="Top_heading">First Term Examination 2018-19</Col>
      </Row>
      <Row>
        <Col className="Top_sub_heading">ACADEMIC PERFORMANCE</Col>
      </Row>
      <Row>
        <Col sm={7} className="sub_heading">PART-I : SCOLASTIC AREAS</Col>
        <Col sm={5} className="sub_heading">PART-II : CO-SCOLASTIC AREAS</Col>
      </Row>

      <Row>
        <Col sm={7} className="part1_col">
        <ScolasticArea/>
        </Col>
        <Col sm={5} className="part2_col">
          PART-2
        </Col>
      </Row>
    </Container>
  );
};
