/* eslint-disable no-fallthrough */
/* eslint-disable default-case */

import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { addAttendenceDetails } from '../../../actions/part3.action';
import { useState } from 'react';

const initialValues = {
	term: '',
	working_days: '',
	present_days: '',
};
export const AttendenceForm = () => {

	const { part3_data } = useSelector((state) => state.AcademicReducer);
	const selectedTerms = part3_data.map((ele) => ele.term);
	const dispatch = useDispatch();

	const [terms, setTerms] = useState(['Term-I', 'Term-II']);
	const [workingDay, setWorkingDay] = useState(0);
	const [presentDay, setPresentDay] = useState(0);

	console.log('workingDay==>', workingDay);

	const part3ValidationSchema = Yup.object().shape({
		term: Yup.string().required('Please enter the term *'),
		working_days: Yup.number()
			.integer()
			.test(
				'working_days',
				'working_days must be greater than present days',
				(value) => value > presentDay
			)
			.required('Please enter the working days *'),
		present_days: Yup.number()
			.integer()
			.test(
				'present_days',
				'present days must be less than working days',
				(value) => value < workingDay
			)
			.required('Please enter the present_days *'),
	});

	const handleInputChange = (name, event, setFieldValue) => {
		const { value } = event.target;
		switch (name) {
			case 'term':
				setFieldValue(name, value);

			case 'working_days':
				setFieldValue(name, value);
				setWorkingDay(value);

			case 'present_days':
				setFieldValue(name, value);
		}
	};

	const handleAddAttendence = (values, actions) => {
		let percentage = parseInt(values.present_days) / parseInt(values.working_days);
		values['percentage'] = percentage * 100;

		dispatch(addAttendenceDetails(values));
		actions.setSubmitting(false);
		actions.resetForm();

		const filter = terms.filter((ele) => ele !== values.term);
		setTerms(filter);
		setWorkingDay(0);
		setPresentDay(0);
	};

	return (
		<Formik
			validationSchema={part3ValidationSchema}
			initialValues={initialValues}
			onSubmit={handleAddAttendence}
		>
			{({ setFieldValue, values, touched, isValid, handleBlur, errors, isSubmitting, actions }) => {
				return (
					<FormikForm>
						<Row className="mb-3 row_size">
							<h4>PART-III : ATTENDENCE</h4>
							<Col xs={12}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Term</InputGroup.Text>

									<Form.Select
										aria-label="Default select example"
										value={values.term}
										onChange={(e) => handleInputChange('term', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="term"
										isValid={!errors.term && touched.term}
										isInvalid={errors.term && touched.term}
									>
										<option disabled value="">
											--Please choose a term--
										</option>
										{terms.map((term, i) => {
											return !selectedTerms.includes(term) && <option key={i}>{term}</option>;
										})}
									</Form.Select>

									{errors.term && touched.term ? (
										<Form.Control.Feedback type="invalid">{errors.term}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>No. of Working Days</InputGroup.Text>
									<Form.Control
										value={values.working_days}
										onChange={(e) => handleInputChange('working_days', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="working_days"
										placeholder="must be greater than or equal to present days"
										id="inlineFormInputGroup"
										type="number"
										isValid={!errors.working_days && touched.working_days}
										isInvalid={errors.working_days && touched.working_days}
									/>
									{errors.working_days && touched.working_days ? (
										<Form.Control.Feedback type="invalid">
											{errors.working_days}
										</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Look+s good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>No. of Present Days</InputGroup.Text>
									<Form.Control
										value={values.present_days}
										onChange={(e) => handleInputChange('present_days', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="present_days"
										placeholder="must be less than or equal to working days"
										id="inlineFormInputGroup"
										type="number"
										isValid={!errors.present_days && touched.present_days}
										isInvalid={errors.present_days && touched.present_days}
									/>
									{errors.present_days && touched.working_days ? (
										<Form.Control.Feedback type="invalid">
											{errors.present_days}
										</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Look+s good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							<Col xs="auto">
								<Button type="submit" className="mb-2" disabled={isSubmitting}>
									{isSubmitting ? 'Adding' : 'Add'}
								</Button>
							</Col>
						</Row>
					</FormikForm>
				);
			}}
		</Formik>
	);
};
