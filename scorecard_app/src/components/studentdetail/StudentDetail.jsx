import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { DataContext } from '../../contexts/DataContext';
import './studentdetail.css';
export const StudentDetail = () => {
	const { handleEditRow, editFlag } = useContext(DataContext);
	const { student_data } = useSelector((state) => state.AcademicReducer);

	return (
		<Container>																																									
			<Row className="student_row">
				<Col>
					<div className="student_div">
						<p>Name of Student : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.name : '___________________________________'}</p>
					</div>
					<div className="student_div">
						<p>Date of Birth : </p>{' '}
						<p className="student_bold_heading" for="start">{student_data ? student_data.dob : 'DD/MM/YYYY'}</p>
					</div>
				</Col>
				<Col>
					<div className="student_div">
						<p>Roll No : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.roll_no : '___________________________________'}</p>
					</div>
					<div className="student_div">
						<p>Class : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.std_class : '___________________________________'}</p>
					</div>
					<div className="student_div">
						<p>Div : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.division : '___________________________________'}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
