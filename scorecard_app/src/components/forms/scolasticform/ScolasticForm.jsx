import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const ScolasticForm = () => {
	let subjects = ['English', 'Hindi', 'Sanskrit', 'Math', 'EVS', 'Social Study', 'Computer', 'Moral', 'G.K', 'Conversation', 'Drawing'];

	return (
		<>
			<Form>

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

			</Form>
		</>
	);
};
