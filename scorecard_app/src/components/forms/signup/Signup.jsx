/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import axios from 'axios';
import { Formik, Form as FormikForm } from 'formik';
// import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './signup.css';

export const Signup = () => {
	const initialValues = {
		email: '',
		password: '',
	};

	const handleInputChange = (name, event, setFieldValue) => {
		const { value } = event.target;
		switch (name) {
			case 'email':
				setFieldValue(name, value);

			case 'password':
				setFieldValue(name, value);
		}
	};

	const handleAddUser = async (values, actions) => {
    console.log("values===>", values);
    await axios.post('http://localhost:5000/api/auth/signup', values);
		actions.setSubmitting(false);
		actions.resetForm();
		alert(`User successfully created`);
	};

	return (
		<div className="signup_form">
			<Formik initialValues={initialValues} onSubmit={handleAddUser}>
				{({
					setFieldValue,
					values,
					touched,
					handleBlur,
					isValid,
					errors,
					isSubmitting,
					actions,
				}) => {
					return (
						<FormikForm>
							{/* <Row className="mb-3">
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>First Name</Form.Label>
									<Form.Control type="text" placeholder="Enter First Name" />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Last Name</Form.Label>
									<Form.Control type="text" placeholder="Enter Last Name" />
								</Form.Group>
							</Row> */}
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
                    name="email"
										placeholder="Enter Your mail id"
										value={values.email}
										onChange={(e) => handleInputChange('email', e, setFieldValue)}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
                    name="password"
										placeholder="Password"
										value={values.password}
										onChange={(e) => handleInputChange('password', e, setFieldValue)}
									/>
								</Form.Group>
							</Row>

							{/* <Form.Group as={Col} controlId="formGridCity">
								<Form.Label>City</Form.Label>
								<Form.Control />
							</Form.Group> */}

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</FormikForm>
					);
				}}
			</Formik>
		</div>
	);
};
