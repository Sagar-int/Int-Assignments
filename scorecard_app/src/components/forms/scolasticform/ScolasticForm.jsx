/* eslint-disable no-fallthrough */
/* eslint-disable default-case */

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button, Col, InputGroup, Row, Form } from 'react-bootstrap';
import { addSubjectDetails } from '../../../actions/part1.action';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { useEffect, useState } from 'react';

const initialValues = {
	subject: '',
	fa: '',
	f_oral: '',
	sa: '',
	s_oral: '',
};

export const ScolasticForm = () => {
	const { part1_data } = useSelector((state) => state.AcademicReducer);
	const selectedSubjects = part1_data.map((ele) => ele.subject);

	const dispatch = useDispatch();

	const [subjects, setSubjects] = useState([
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
	]);

	

	const part1ValidationSchema = Yup.object().shape({
		subject: Yup.string().required('Please enter the Subject'),
		fa: Yup.number()
			.integer()
			.min(0, 'minimum 0 score must be enter')
			.max(80, 'score must be less than 80')
			.required('Please enter the score'),
		f_oral: Yup.number()
			.integer()
			.min(0, 'minimum 0 score must be enter')
			.max(20, 'score must be less than 20')
			.required('Please enter the score'),
		sa: Yup.number()
			.integer()
			.min(0, 'minimum 0 score must be enter')
			.max(80, 'score must be less than 80')
			.required('Please enter the score'),
		s_oral: Yup.number()
			.integer()
			.min(0, 'minimum 0 score must be enter')
			.max(20, 'score must be less than 20')
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

	const handleAddSubject = (values, actions) => {
		let sum =
			parseInt(values.fa) + parseInt(values.f_oral) + parseInt(values.sa) + parseInt(values.s_oral);
		values['total_mark'] = sum;

		dispatch(addSubjectDetails(values));
		actions.setSubmitting(false);
		actions.resetForm();
		alert(`${values.subject} subject added successfully`);
	};

	return (
		<Formik
			validationSchema={part1ValidationSchema}
			initialValues={initialValues}
			onSubmit={handleAddSubject}
		>
			{({ setFieldValue, values, touched, handleBlur, isValid, errors, isSubmitting, actions }) => {
				console.log(errors.fa, touched.fa);

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
										onBlur={handleBlur} // This apparently updates `touched`
										name="subject"
										isValid={!errors.subject && touched.subject}
										isInvalid={errors.subject && touched.subject}
									>
										<option disabled value="">
											--Please choose a subject--
										</option>
										{subjects.map((sub, i) => {
											return !selectedSubjects.includes(sub) && <option key={i}>{sub}</option>;
										})}
									</Form.Select>
									{errors.subject && touched.subject ? (
										<Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							{/* Columns start at 100% wide on mobile and bump up to 50% wide on desktop */}
							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>FA</InputGroup.Text>
									<Form.Control
										value={values.fa}
										onChange={(e) => handleInputChange('fa', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="fa"
										id="inlineFormInputGroup"
										placeholder="Score out of 80"
										type="number"
										isValid={!errors.fa && touched.fa}
										isInvalid={errors.fa && touched.fa}
									/>
									{errors.fa && touched.fa ? (
										<Form.Control.Feedback type="invalid">{errors.fa}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Oral-I</InputGroup.Text>
									<Form.Control
										value={values.f_oral}
										onChange={(e) => handleInputChange('f_oral', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="f_oral"
										id="inlineFormInputGroup"
										placeholder="Score out of 20"
										type="number"
										isValid={!errors.f_oral && touched.f_oral}
										isInvalid={errors.f_oral && touched.f_oral}
									/>
									{errors.f_oral && touched.f_oral ? (
										<Form.Control.Feedback type="invalid">{errors.f_oral}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>SA</InputGroup.Text>
									<Form.Control
										value={values.sa}
										onChange={(e) => handleInputChange('sa', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="sa"
										id="inlineFormInputGroup"
										placeholder="Score out of 80"
										type="number"
										isValid={!errors.sa && touched.sa}
										isInvalid={errors.sa && touched.sa}
									/>
									{errors.sa && touched.sa ? (
										<Form.Control.Feedback type="invalid">{errors.sa}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Oral-II</InputGroup.Text>
									<Form.Control
										value={values.s_oral}
										onChange={(e) => handleInputChange('s_oral', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="s_oral"
										id="inlineFormInputGroup"
										placeholder="Score out of 20"
										type="number"
										isValid={!errors.s_oral && touched.s_oral}
										isInvalid={errors.s_oral && touched.s_oral}
									/>
									{errors.s_oral && touched.s_oral ? (
										<Form.Control.Feedback type="invalid">{errors.s_oral}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
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
