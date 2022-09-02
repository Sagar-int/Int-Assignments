import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { DataContext } from '../../contexts/DataContext';
import { Attendance } from '../attendance/Attendance';
import { CoscalasticsArea } from '../coscalasticsarea/CoscalasticsArea';
import { GradingScale } from '../gradingscale/GradingScale';
import { CustomModal } from '../modal/CustomModal';
import { ScolasticArea } from '../scolasticsarea/ScolasticArea';
import { Signature1 } from '../signature/Signature1';
import { StudentDetail } from '../studentdetail/StudentDetail';
import './homepage.css';

const pageStyle = `
  @page {
    size: 300mm 500mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;

export const HomePage = React.forwardRef((props, ref) => {
	const { handleShow, child, handleEditButton, editFlag } = useContext(DataContext);

	return (
		<Container
			id="homepageId"
			fluid="md"
			className="main_container"
			ref={ref}
			style={{ pageStyle }}
		>
			<Row onClick={() => handleEditButton(true)}>
				<Col className="Top_heading">First Term Examination 2018-19</Col>
			</Row>

			<Row>
				<div className="flag_div">
					{editFlag ? (
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
					) : null}
				</div>
				<StudentDetail />
			</Row>

			<Row>
				<Col className="Top_sub_heading">ACADEMIC PERFORMANCE</Col>
			</Row>

			<Row xs="auto" className="part_common_row">
				<Col xs={12} sm={8} className="part_column">
					<div className="sub_heading_div">
						<span className="sub_heading">PART-I : SCOLASTIC AREAS</span>

						{/* Button to Add the Subject details */}
						{editFlag ? (
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
								Add Subject Details
							</Button>
						) : null}
					</div>
					<CustomModal ChildForm={child} />
					<ScolasticArea />
				</Col>
				<Col xs={12} sm={4} className="part_column part_2">
					<div className="sub_heading_div">
						<span className="sub_heading">PART-II : CO-SCOLASTIC AREAS</span>

						{/* Button to Add the Skill details */}
						{editFlag ? (
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
						) : null}
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
					{editFlag ? (
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
							Add Attendence details
						</Button>
					) : null}
				</div>
				<Attendance />
			</Row>

			<Row>
				<Signature1 />
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
});
