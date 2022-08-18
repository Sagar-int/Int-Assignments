import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const CoScolasticForm = () => {
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
			<Form>
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
			</Form>
		</>
	);
};
