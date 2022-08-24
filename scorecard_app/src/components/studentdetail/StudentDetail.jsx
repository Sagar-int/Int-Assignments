import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import './studentdetail.css';
export const StudentDetail = () => {

	const {student_data} = useSelector((state) => state.AcademicReducer);

	console.log("student_data-->", student_data);

	return (
		<Container>
			<Row className='student_row'>
				<Col xs={12} md={9}>
					<div className="student_div">
						<p>Name of Student :  </p> <p className='student_bold_heading'>{student_data? student_data.name : "xyz"}</p>
					</div>
					<div className="student_div">
						<p>Date of Birth : </p> <p className='student_bold_heading'>{student_data? student_data.dob : "01/02/2022"}</p>
					</div>
				</Col>
				<Col xs={12} md={3}>
					<div className="student_div">
						<p>Roll No : </p> <p className='student_bold_heading'>{student_data? student_data.roll_no : "xyz123"}</p>
					</div>
					<div className="student_div">
						<p>Class : </p> <p className='student_bold_heading'>{student_data? student_data.std_class : "xyz"}</p>
					</div>
					<div className="student_div">
						<p>Div : </p> <p className='student_bold_heading'>{student_data? student_data.division : "xyz"}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
