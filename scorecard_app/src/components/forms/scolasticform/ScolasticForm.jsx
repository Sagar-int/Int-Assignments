import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { addSubjectDetails } from '../../../actions/part1.action';

export const ScolasticForm = () => {
	let subjects = ['English', 'Hindi', 'Sanskrit', 'Math', 'EVS', 'Social Study', 'Computer', 'Moral', 'G.K', 'Conversation', 'Drawing'];

	const initialValues = {
		subject: '',
		fa: Number,
		f_oral: Number,
		sa:Number,
		s_oral: Number,
	};

	const dispatch = useDispatch();
	const {part1_data} = useSelector((state) => state.AcademicReducer);

	console.log("part1_data:",part1_data);

	const [values, setValues] = useState(initialValues);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === 's_oral') {
			setValues({
				...values,
				[name]: value,
				["total_mark"]:total +  parseInt(value)
			});
		}
		else{
			setValues({
				...values,
				[name]: value,
			});
		}
	};

	let total = parseInt(values.fa) + parseInt(values.sa) + parseInt(values.f_oral)
	const handleAddSubject = (e) => {
		e.preventDefault();
		dispatch(addSubjectDetails(values))
		
	};


	return (
		<>
			<Form>
				<Row className="mb-3 row_size">
					<h4>PART-I : SCOLASTIC AREAS</h4>
					<Col xs={12}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Subjects</InputGroup.Text>
							<Form.Select aria-label="Default select example"value={values.subject} onChange={handleInputChange} name="subject">
							<option value="">--Please choose a subject--</option>
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
							<Form.Control value={values.fa} onChange={handleInputChange} name="fa" id="inlineFormInputGroup" placeholder="Score out of 80" type="number" />
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Oral-I</InputGroup.Text>
							<Form.Control value={values.f_oral} onChange={handleInputChange} name="f_oral" id="inlineFormInputGroup" placeholder="Score out of 20" type="number" />
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>SA</InputGroup.Text>
							<Form.Control value={values.sa} onChange={handleInputChange} name="sa" id="inlineFormInputGroup" placeholder="Score out of 80" type="number" />
						</InputGroup>
					</Col>

					<Col xs={12} md={6}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Oral-II</InputGroup.Text>
							<Form.Control value={values.s_oral} onChange={handleInputChange} name="s_oral" id="inlineFormInputGroup" placeholder="Score out of 20" type="number" />
						</InputGroup>
					</Col>

					<Col xs="auto">
						<Button onClick={(e)=>handleAddSubject(e)} className="mb-2">
							Add
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
};
