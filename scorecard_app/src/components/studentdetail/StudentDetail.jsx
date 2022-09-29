import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';

import './studentdetail.css';
export const StudentDetail = () => {
	const { student_data } = useSelector((state) => state.AcademicReducer);

	return (
		<Container>
			<Row className="student_row">
				<Col>
					<div className="student_div">
						<p>Name of Student : </p>{' '}
						{student_data ? (
							<p className="student_bold_heading">{student_data.name}</p>
						) : (
							<p className="dash_line"></p>
						)}
					</div>
					<div className="student_div">
						<p>Date of Birth : </p>{' '}
						<p className="student_bold_heading" for="start">{student_data ? student_data.dob : 'DD/MM/YYYY'}</p>
					</div>
					{/* {student_data ? (
						<p className="student_bold_heading">{student_data.dob}</p>
					) : (
						<p className="dash_line"></p>
					)} */}
				</Col>
				<Col>
					<div className="student_div">
						<p>Roll No : </p>{' '}
						{student_data ? (
							<p className="student_bold_heading">{student_data.roll_no}</p>
						) : (
							<p className="dash_line"></p>
						)}
					</div>
					<div className="student_div">
						<p>Class : </p>{' '}
						{/* <p className="student_bold_heading">
							{student_data ? student_data.std_class : '___________________________________'}
						</p> */}
						{student_data ? (
							<p className="student_bold_heading">{student_data.std_class}</p>
						) : (
							<p className="dash_line"></p>
						)}
					</div>
					<div className="student_div">
						<p>Div : </p>{' '}
						{/* <p className="student_bold_heading">
							{student_data ? student_data.division : '___________________________________'}
						</p> */}
						{student_data ? (
							<p className="student_bold_heading">{student_data.division}</p>
						) : (
							<p className="dash_line"></p>
						)}
					</div>
				</Col>
			</Row>
		</Container>
	);
};
