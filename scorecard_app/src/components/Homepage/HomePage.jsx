import { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { DataContext } from '../../contexts/DataContext';
import { Attendance } from '../attendance/Attendance';
import { CoscalasticsArea } from '../coscalasticsarea/CoscalasticsArea';
import { ScolasticForm } from '../forms/scolasticform/ScolasticForm';
import { GradingScale } from '../gradingscale/GradingScale';
import { CustomModal } from '../modal/CustomModal';
import { ScolasticArea } from '../scolasticsarea/ScolasticArea';
import { Signature } from '../signature/Signature';
import { StudentDetail } from '../studentdetail/StudentDetail';
import './homepage.css';

export const HomePage = () => {
	const { show, handleClose, handleShow, child } = useContext(DataContext);

	return (
		<Container fluid="md" className="main_container">
			<Row>
				<Col className="Top_heading">First Term Examination 2018-19</Col>
			</Row>

			<Row>
				<div>
					<Button
						variant="primary"
						size="sm"
						className="edit_logo"
						onClick={() => handleShow('student')}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							class="bi bi-pencil-square"
							viewBox="0 0 16 16"
						>
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
							<path
								fill-rule="evenodd"
								d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
							/>
						</svg>
						Add Student Details
					</Button>
				</div>
				<StudentDetail />
			</Row>

			<Row>
				<Col className="Top_sub_heading">ACADEMIC PERFORMANCE</Col>
			</Row>

			<Row xs="auto" className="part_common_row">
				<Col xs={12} md={8} className="part_column">
					<div className="sub_heading_div">
						<span className="sub_heading">PART-I : SCOLASTIC AREAS</span>

						{/* Button to Add the Subject details */}
						<Button
							variant="primary"
							size="sm"
							className="edit_logo"
							onClick={() => handleShow('subject')}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								fill="currentColor"
								class="bi bi-pencil-square"
								viewBox="0 0 16 16"
							>
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
								<path
									fill-rule="evenodd"
									d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
								/>
							</svg>
							Add Subjects Details
						</Button>
					</div>
					<CustomModal ChildForm={child} />
					<ScolasticArea />
				</Col>
				<Col xs={12} md={4} className="part_column part_2">
					<div className="sub_heading_div">
						<span className="sub_heading">PART-II : CO-SCOLASTIC AREAS</span>

						{/* Button to Add the Skill details */}
						<Button
							variant="primary"
							size="sm"
							className="edit_logo"
							onClick={() => handleShow('skill')}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								fill="currentColor"
								class="bi bi-pencil-square"
								viewBox="0 0 16 16"
							>
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
								<path
									fill-rule="evenodd"
									d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
								/>
							</svg>
							Add Skill
						</Button>
					</div>
					<CustomModal ChildForm={child} />
					<CoscalasticsArea />
				</Col>
			</Row>

			<br />
			<Row>
				<div className="sub_heading_div">
					<span className="attendence_heading"> PART-III : Attendence </span>

					{/* Button to Add the Attendence details */}
					<Button
						variant="primary"
						size="sm"
						className="edit_logo"
						onClick={() => handleShow('attendence')}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							class="bi bi-pencil-square"
							viewBox="0 0 16 16"
						>
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
							<path
								fill-rule="evenodd"
								d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
							/>
						</svg>
						Add Attendence Details
					</Button>
				</div>
				<Attendance />
			</Row>

			<Row>
				<Signature />
			</Row>

			<div className="grade_scale_div">
				<span className="attendence_heading"> Grading Scale</span>
				<GradingScale />
			</div>

			<Row>
				<span className="footer">Our Parents are seen Gold on the Earth</span>
			</Row>
		</Container>
	);
};
