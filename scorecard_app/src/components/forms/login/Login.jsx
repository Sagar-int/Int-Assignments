/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
// import axios from 'axios';
import AXIOS from '../../../shared/api.js';

import { Formik, Form as FormikForm } from 'formik';
// import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setupUserLogin } from '../../../actions/auth.action';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Login = () => {
	// const { userData, email, auth_token } = useSelector((state) => state.AcademicReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	const handleUserLogin = async (values, actions) => {
		try {
			const { data } = await AXIOS.post('/auth/login', values);
			dispatch(setupUserLogin(data));
			actions.setSubmitting(false);
			actions.resetForm();
			navigate('/');
			// alert(`logged in successfully`);
			Swal.fire({
				// position: 'top-end',
				icon: 'success',
				title: 'logged in successfully',
				showConfirmButton: false,
				timer: 2000
			  })
		} catch (err) {
			console.log('LoginError..>>>>>>>', err);
			actions.setErrors(err);
		}
	};

	return (
		<div className="login_form">
			<Formik initialValues={initialValues} onSubmit={handleUserLogin}>
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
