import './mainform.css';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const MainForm = () => {
	let subjects = ['English', 'Hindi', 'Sanskrit', 'Math', 'EVS', 'Social Study', 'Computer', 'Moral', 'G.K', 'Conversation', 'Drawing'];

	let skills = [
		'Development & Maturity',
		'Responsibility',
		'Self Confidence',
		'Participation in Group Work',
		'Neatness',
		'Music',
		'Discipline',
		'Hand Work',
		'Attitude towards home work',
		'Craft',
		'Regularity and punctuality',
	];

	return (
		<>
			<Form >
				<h1 className="form_heading">Scorecard Form</h1>

				<Row className="mb-3 row_size">
					<h4>PART-I : SCOLASTIC AREAS</h4>
					<Col xs={12}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Subjects</InputGroup.Text>
							<Form.Select defaultValue="Choose...">
								{subjects.map((sub) => (
									<option>{sub}</option>
								))}
							</Form.Select>
						</InputGroup>
					</Col>

					{/* Columns start at 100% wide on mobile and bump up to 50% wide on desktop */}
					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>FA</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="Score out of 80" type="number" />
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Oral-I</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="Score out of 20" type="number" />
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>SA</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="Score out of 80" type="number" />
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Oral-II</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="Score out of 20" type="number" />
						</InputGroup>
					</Col>
					<Col xs="auto">
						<Button type="submit" className="mb-2">
							Add
						</Button>
					</Col>
				</Row>

				<Row className="mb-3 row_size">
					<h4>PART-II : CO-SCOLASTIC AREAS</h4>
					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Skills</InputGroup.Text>
							<Form.Select defaultValue="Choose...">
								{skills.map((skill) => (
									<option>{skill}</option>
								))}
							</Form.Select>
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Grade</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="From A to Z" />
						</InputGroup>
					</Col>
					<Col xs="auto">
						<Button type="submit" className="mb-2">
							Add
						</Button>
					</Col>
				</Row>

				<Row className="mb-3 row_size">
					<h4>PART-III : ATTENDENCE</h4>
					<Col xs={12}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Term</InputGroup.Text>
							<Form.Select defaultValue="Choose...">
								<option>Term-I</option>
								<option>Term-II</option>
							</Form.Select>
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>No. of Working Days</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="Score out of 20" type="number" />
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>No. of Present Days</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="Score out of 20" type="number" />
						</InputGroup>
					</Col>

					<Col xs="auto">
						<Button type="submit" className="mb-2">
							Add
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
};
