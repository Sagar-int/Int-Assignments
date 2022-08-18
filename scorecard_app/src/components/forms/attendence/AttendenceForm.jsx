import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const AttendenceForm = () => {
  return (
    <>
      <Form>
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
  )
}
