/* eslint-disable no-fallthrough */
/* eslint-disable default-case */

import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { addStudentDetails } from '../../../actions/student.action';

const initialValues = {
	name: '',
	dob: '',
	roll_no: '',
	std_class: '',
	division: '',
};

export const StudentForm = () => {
	const dispatch = useDispatch();
	// const { part1_data } = useSelector((state) => state.AcademicReducer);

	const studentDetailSchema = Yup.object().shape({
		name: Yup.string()
			.min(1, 'Name cannot be less than 1 character long')
			.max(40, 'Name cannot be more than 40 characters long')
			.required('Please enter Name of Student'),
		dob: Yup.date().required('Please enter Date of Birth'),
		roll_no: Yup.string()
			.min(4, 'Roll Number cannot be less than 4 character long')
			.max(40, 'Roll Number cannot be more than 40 characters long')
			.required('Please enter Roll Number'),
		std_class: Yup.string()
			.min(2, 'Class cannot be less than 2 character long')
			.max(5, 'Class cannot be more than 5 characters long')
			.required('Please enter Class of Student'),
		division: Yup.string()
			.min(1, 'division cannot be less than 1 character long')
			.max(3, 'division cannot be more than 3 characters long')
			.required('Please enter division of Student'),
	});

	const handleInputChange = (name, event, setFieldValue) => {
		const { value } = event.target;
		switch (name) {
			case 'name':
				setFieldValue(name, value);

			case 'dob':
				setFieldValue(name, value);

			case 'roll_no':
				setFieldValue(name, value);

			case 'std_class':
				setFieldValue(name, value);

			case 'division':
				setFieldValue(name, value);
		}
	};

	const handleAddStudent = (values, actions) => {
		dispatch(addStudentDetails(values));
		console.log("Student_Values-->", values);
		actions.setSubmitting(false);
		actions.resetForm();
		alert(`Students details successfully added`)
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={studentDetailSchema}
			onSubmit={handleAddStudent}
		>
			{({ setFieldValue, values, touched, handleBlur, isValid, errors, isSubmitting, actions }) => {
				return (
					<FormikForm>
						<Col xs={12}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Name</Form.Label>
								<Form.Control
									value={values.name}
									onChange={(e) => handleInputChange('name', e, setFieldValue)}
									onBlur={handleBlur} // This apparently updates `touched`
									name="name"
									type="text"
									placeholder="Please Enter Student's Name"
									isValid={!errors.name && touched.name}
									isInvalid={errors.name && touched.name}
								/>
								{errors.name && touched.name ? (
									<Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
								) : (
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								)}
								<Form.Text className="text-muted">
									Name must be same as per students Adhar card *
								</Form.Text>
							</Form.Group>
						</Col>

						<Row>
							<Col xs={12} md={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Date of Birth</Form.Label>
									<Form.Control
										value={values.dob}
										onChange={(e) => handleInputChange('dob', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="dob"
										type="date"
										placeholder="enter date of Birth"
										isValid={!errors.dob && touched.dob}
										isInvalid={errors.dob && touched.dob}
									/>

									{errors.dob && touched.dob ? (
										<Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</Form.Group>
							</Col>

							<Col xs={12} md={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Roll No.</Form.Label>
									<Form.Control
										value={values.roll_no}
										onChange={(e) => handleInputChange('roll_no', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="roll_no"
										type="text"
										placeholder="Enter Roll Number"
										isValid={!errors.roll_no && touched.roll_no}
										isInvalid={errors.roll_no && touched.roll_no}
									/>

									{errors.roll_no && touched.roll_no ? (
										<Form.Control.Feedback type="invalid">{errors.roll_no}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col xs={12} md={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Class</Form.Label>
									<Form.Control
										value={values.std_class}
										onChange={(e) => handleInputChange('std_class', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="std_class"
										type="text"
										placeholder="Enter Class"
										isValid={!errors.std_class && touched.std_class}
										isInvalid={errors.std_class && touched.std_class}
									/>

									{errors.std_class && touched.std_class ? (
										<Form.Control.Feedback type="invalid">{errors.std_class}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</Form.Group>
							</Col>

							<Col xs={12} md={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Division</Form.Label>
									<Form.Control
										value={values.division}
										onChange={(e) => handleInputChange('division', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="division"
										type="text"
										placeholder="Enter division"
										isValid={!errors.division && touched.division}
										isInvalid={errors.division && touched.division}
									/>

									{errors.division && touched.division ? (
										<Form.Control.Feedback type="invalid">{errors.division}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</Form.Group>
							</Col>
						</Row>

						<Button type="submit" className="mb-2" disabled={isSubmitting}>
							{isSubmitting ? 'Adding' : 'Add'}
						</Button>
					</FormikForm>
				);
			}}
		</Formik>
	);
};
