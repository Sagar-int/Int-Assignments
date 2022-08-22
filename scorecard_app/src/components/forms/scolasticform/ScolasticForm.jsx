import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button, Col, InputGroup, Row, Form } from 'react-bootstrap';
import { addSubjectDetails } from '../../../actions/part1.action';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';

const initialValues = {
	subject: '',
	fa: '',
	f_oral: '',
	sa: '',
	s_oral: '',
};

export const ScolasticForm = () => {
	let subjects = [
		'English',
		'Hindi',
		'Sanskrit',
		'Math',
		'EVS',
		'Social Study',
		'Computer',
		'Moral',
		'G.K',
		'Conversation',
		'Drawing',
	];

	const dispatch = useDispatch();
	const { part1_data } = useSelector((state) => state.AcademicReducer);

	const part1ValidationSchema = Yup.object().shape({
		subject: Yup.string().required('Please enter the Subject'),
		fa: Yup.number()
			.min(0, 'minimum 0 score must be enter')
			.max(80, 'maximum 80 score must be enter')
			.required('Please enter the score'),
		f_oral: Yup.number()
			.min(0, 'minimum 0 score must be enter')
			.max(20, 'maximum 20 score must be enter')
			.required('Please enter the score'),
		sa: Yup.number()
			.min(0, 'minimum 0 score must be enter')
			.max(80, 'maximum 80 score must be enter')
			.required('Please enter the score'),
		s_oral: Yup.number()
			.min(0, 'minimum 0 score must be enter')
			.max(20, 'maximum 20 score must be enter')
			.required('Please enter the score'),
	});

	const handleInputChange = (name, event, setFieldValue) => {
		const { value } = event.target;
		switch (name) {
			case 'subject':
				setFieldValue(name, value);
			case 'fa':
				setFieldValue(name, value);
			case 'f_oral':
				setFieldValue(name, value);
			case 'sa':
				setFieldValue(name, value);
			case 's_oral':
				setFieldValue(name, value);
		}
	};

	// let total = parseInt(values.fa) + parseInt(values.sa) + parseInt(values.f_oral);

	const handleAddSubject = (e, values, actions) => {
		e.preventDefault();
		console.log({ values });
		dispatch(addSubjectDetails(values));
		// actions.isSubmitting(false);
	};

	return (
		<Formik validationSchema={part1ValidationSchema} initialValues={initialValues} onSubmit={handleAddSubject}>
			{({ setFieldValue, values, touched, isValid, errors, isSubmitting, actions }) => {
				console.log({ errors, values });
				return (
					<FormikForm>
						<Row className="mb-3 row_size">
							<h4>PART-I : SCOLASTIC AREAS</h4>
							<Col xs={12}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Subjects</InputGroup.Text>
									<Form.Select
										aria-label="Default select example"
										value={values.subject}
										onChange={(e) => handleInputChange('subject', e, setFieldValue)}
										name="subject"
										isInvalid={!!errors.subject}
									>
										<option disabled value="">
											--Please choose a subject--
										</option>
										{subjects.map((sub) => (
											<option>{sub}</option>
										))}
									</Form.Select>
									<Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
								</InputGroup>
							</Col>

							{/* Columns start at 100% wide on mobile and bump up to 50% wide on desktop */}
							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>FA</InputGroup.Text>
									<Form.Control
										value={values.fa}
										onChange={(e) => handleInputChange('fa', e, setFieldValue)}
										name="fa"
										id="inlineFormInputGroup"
										placeholder="Score out of 80"
										type="number"
										isInvalid={!!errors.fa}
									/>
									<Form.Control.Feedback type="invalid">{errors.fa}</Form.Control.Feedback>
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Oral-I</InputGroup.Text>
									<Form.Control
										value={values.f_oral}
										onChange={(e) => handleInputChange('f_oral', e, setFieldValue)}
										name="f_oral"
										id="inlineFormInputGroup"
										placeholder="Score out of 20"
										type="number"
										isInvalid={!!errors.f_oral}
									/>
									<Form.Control.Feedback type="invalid">{errors.f_oral}</Form.Control.Feedback>
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>SA</InputGroup.Text>
									<Form.Control
										value={values.sa}
										onChange={(e) => handleInputChange('sa', e, setFieldValue)}
										name="sa"
										id="inlineFormInputGroup"
										placeholder="Score out of 80"
										type="number"
										isInvalid={!!errors.sa}
									/>
									<Form.Control.Feedback type="invalid">{errors.sa}</Form.Control.Feedback>
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Oral-II</InputGroup.Text>
									<Form.Control
										value={values.s_oral}
										onChange={(e) => handleInputChange('s_oral', e, setFieldValue)}
										name="s_oral"
										id="inlineFormInputGroup"
										placeholder="Score out of 20"
										type="number"
										isInvalid={!!errors.s_oral}
									/>
									<Form.Control.Feedback type="invalid">{errors.s_oral}</Form.Control.Feedback>
								</InputGroup>
							</Col>

							<Col xs="auto">
								<Button type="submit" className="mb-2" disabled={isSubmitting}>
									{isSubmitting ? 'Adding' : 'Add'}
								</Button>
								{/* <Button onClick={(e) => handleAddSubject(e, values, actions)} className="mb-2" disabled={isSubmitting}>
									{isSubmitting ? 'Adding' : 'Add'}
								</Button> */}
							</Col>
						</Row>
					</FormikForm>
				);
			}}
		</Formik>
	);
};
