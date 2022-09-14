import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { DataContext } from '../../contexts/DataContext';
import './studentdetail.css';
export const StudentDetail = () => {
	const { handleEditRow, editFlag } = useContext(DataContext);
	const { student_data } = useSelector((state) => state.AcademicReducer);

	return (
<<<<<<< HEAD
		<Container>																																									
=======
		<Container>
			{/* {editFlag && (
				<Button
				variant="outline-secondary"
				onClick={() =>
					handleEditRow({
						child: 'student',
						Id: 0,
						edit: false,
					})
				}
				className="mb-2 edit_student"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="currentColor"
					class="bi bi-pencil-square"
					viewBox="0 0 16 16"
					// onClick={() => handleShow('subject')}
					onClick={() =>
						handleEditRow({
							child: 'subject',
							Id: 0,
							edit: false,
						})
					}
				>
					<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
					<path
						fill-rule="evenodd"
						d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
					/>
				</svg>
				Edit Student Details
			</Button>
			)} */}

			

>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
			<Row className="student_row">
				<Col>
					<div className="student_div">
						<p>Name of Student : </p>{' '}
<<<<<<< HEAD
						<p className="student_bold_heading">{student_data ? student_data.name : '___________________________________'}</p>
					</div>
					<div className="student_div">
						<p>Date of Birth : </p>{' '}
						<p className="student_bold_heading" for="start">{student_data ? student_data.dob : 'DD/MM/YYYY'}</p>
=======
						<p className="student_bold_heading">{student_data ? student_data.name : 'xyz'}</p>
					</div>
					<div className="student_div">
						<p>Date of Birth : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.dob : '01/02/2022'}</p>
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
					</div>
				</Col>
				<Col>
					<div className="student_div">
						<p>Roll No : </p>{' '}
<<<<<<< HEAD
						<p className="student_bold_heading">{student_data ? student_data.roll_no : '___________________________________'}</p>
					</div>
					<div className="student_div">
						<p>Class : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.std_class : '___________________________________'}</p>
					</div>
					<div className="student_div">
						<p>Div : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.division : '___________________________________'}</p>
=======
						<p className="student_bold_heading">{student_data ? student_data.roll_no : 'xyz123'}</p>
					</div>
					<div className="student_div">
						<p>Class : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.std_class : 'xyz'}</p>
					</div>
					<div className="student_div">
						<p>Div : </p>{' '}
						<p className="student_bold_heading">{student_data ? student_data.division : 'xyz'}</p>
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
					</div>
				</Col>
			</Row>
		</Container>
	);
};
