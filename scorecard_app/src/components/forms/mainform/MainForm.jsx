import './mainform.css';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const MainForm = () => {
	return (
		<>
			<Form className="main_form">
				<h1 className="form_heading">Scorecard Form</h1>
				<Row className="mb-3 row_size">
					<h4>PART-I : SCOLASTIC AREAS</h4>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Subject</Form.Label>
						<Form.Select defaultValue="Choose...">
							<option>English</option>
							<option>Hindi</option>
							<option>Sanskrit</option>
							<option>Math</option>
							<option>EVS</option>
							<option>Social Study</option>
							<option>Computer</option>
							<option>Moral</option>
							<option>G.K</option>
							<option>Conversation</option>
							<option>Drawing</option>
						</Form.Select>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>First Assessment</Form.Label>
						<Form.Control type="number" />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>First Oral</Form.Label>
						<Form.Control type="number" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Second Assessment</Form.Label>
						<Form.Control type="number" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Second Oral</Form.Label>
						<Form.Control type="number" />
					</Form.Group>
				</Row>

				<Row className="align-items-center">
					<Col xs="auto">
						<InputGroup className="mb-2">
							<InputGroup.Text>Subjects</InputGroup.Text>
							<Form.Select defaultValue="Choose...">
								<option>English</option>
								<option>Hindi</option>
								<option>Sanskrit</option>
								<option>Math</option>
								<option>EVS</option>
								<option>Social Study</option>
								<option>Computer</option>
								<option>Moral</option>
								<option>G.K</option>
								<option>Conversation</option>
								<option>Drawing</option>
							</Form.Select>
						</InputGroup>
					</Col>

					<Col xs="auto">
						<InputGroup className="mb-2">
							<InputGroup.Text>FA</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="From A to Z" />
						</InputGroup>
					</Col>

					<Col xs="auto">
						<InputGroup className="mb-2">
							<InputGroup.Text>Oral-I</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="From A to Z" />
						</InputGroup>
					</Col>

					<Col xs="auto">
						<InputGroup className="mb-2">
							<InputGroup.Text>SA</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="From A to Z" />
						</InputGroup>
					</Col>

					<Col xs="auto">
						<InputGroup className="mb-2">
							<InputGroup.Text>Oral-II</InputGroup.Text>
							<Form.Control id="inlineFormInputGroup" placeholder="From A to Z" />
						</InputGroup>
					</Col>
					<Col xs="auto">
						<Button type="submit" className="mb-2">
							Add
						</Button>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs="auto">
						<InputGroup className="mb-2">
							<InputGroup.Text>Skills</InputGroup.Text>
							<Form.Select defaultValue="Choose...">
								<option>Development & Maturity</option>
								<option>Responsibility</option>
								<option>Self Confidence</option>
								<option>Participation in Group Work</option>
								<option>Neatness</option>
								<option>Music</option>
								<option>Discipline</option>
								<option>Hand Work</option>
								<option>Attitude towards home work</option>
								<option>Craft</option>
								<option>Regularity and punctuality</option>
							</Form.Select>
						</InputGroup>
					</Col>

					<Col xs="auto">
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
					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Term</Form.Label>
						<Form.Select defaultValue="Choose...">
							<option>Term-I</option>
							<option>Term-II</option>
						</Form.Select>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>No. of Working Days</Form.Label>
						<Form.Control type="number" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>No. of Present Days</Form.Label>
						<Form.Control type="number" />
					</Form.Group>
				</Row>
			</Form>
		</>
	);
};
