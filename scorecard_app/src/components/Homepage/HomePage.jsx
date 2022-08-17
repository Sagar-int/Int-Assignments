import { Col, Container, Row } from 'react-bootstrap';
import { Attendance } from '../attendance/Attendance';
import { CoscalasticsArea } from '../coscalasticsarea/CoscalasticsArea';
import { GradingScale } from '../gradingscale/GradingScale';
import { ScolasticArea } from '../scolasticsarea/ScolasticArea';
import { Signature } from '../signature/Signature';
import './homepage.css';

export const HomePage = () => {
	return (
		<Container fluid="md" className="main_container">
			<Row>
				<Col className="Top_heading">First Term Examination 2018-19</Col>
			</Row>

			<Row>
				<Col className="Top_sub_heading">ACADEMIC PERFORMANCE</Col>
			</Row>

			<Row className="part_common_row">
				<Col sm={7} className="part_column">
					<span className="sub_heading">PART-I : SCOLASTIC AREAS</span>
					<ScolasticArea />
				</Col>
				<Col sm={5} className="part_column part_2">
					<span className="sub_heading"> PART-II : CO-SCOLASTIC AREAS </span>
					<CoscalasticsArea />
				</Col>
			</Row>

			<br />
			<Row>
				<span className="attendence_heading"> PART-III : Attendence </span>
				<Attendance />
			</Row>
			
			<Row>
				<Signature />
			</Row>

			{/* <Row>
				<span className="attendence_heading"> Grading Scale</span>
				<GradingScale />
			</Row> */}
			<div className='grade_scale_div'>
				<span className="attendence_heading"> Grading Scale</span>
				<GradingScale />
			</div>

			<Row>
				<span className="footer">Our Parents are seen Gold on the Earth</span>
			</Row>
		</Container>
	);
};
