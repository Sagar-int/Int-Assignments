/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux/es/exports';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { addSkillDetails } from '../../../actions/part2.action';


const initialValues = {
	skill: '',
	grade: '',
};

export const CoScolasticForm = () => {
	const dispatch = useDispatch();


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

	const part2ValidationSchema = Yup.object().shape({
		skill: Yup.string().required('Please enter the Skill'),
		grade: Yup.string().required('Please enter the Grade'),
	});

	const handleInputChange = (name, event, setFieldValue) => {
		const { value } = event.target;
		switch (name) {
			case 'skill':
				setFieldValue(name, value);

			case 'grade':
				setFieldValue(name, value);
		}
	};

	const handleAddSkill = (values, actions) => {
		dispatch(addSkillDetails(values));
		actions.setSubmitting(false);
		actions.resetForm();
	};

	return (
		<Formik
			validationSchema={part2ValidationSchema}
			initialValues={initialValues}
			onSubmit={handleAddSkill}
		>
			{({ setFieldValue, values, touched, isValid, handleBlur, errors, isSubmitting, actions }) => {
				return (
					<FormikForm>
						<Row className="mb-3 row_size">
							<h4>PART-II : CO-SCOLASTIC AREAS</h4>
							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Skills</InputGroup.Text>
									<Form.Select
										aria-label="Default select example"
										value={values.skill}
										onChange={(e) => handleInputChange('skill', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="skill"
										isValid={!errors.skill && touched.skill}
										isInvalid={errors.skill && touched.skill}
									>
										<option disabled value="">
											--Please choose a skill--
										</option>
										{skills.map((skill) => (
											<option>{skill}</option>
										))}
									</Form.Select>

									{errors.skill && touched.skill ? (
										<Form.Control.Feedback type="invalid">{errors.skill}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>

							<Col xs={12} md={6}>
								<InputGroup className="mb-2">
									<InputGroup.Text>Grade</InputGroup.Text>
									<Form.Control
										value={values.grade}
										onChange={(e) => handleInputChange('grade', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="grade"
										id="inlineFormInputGroup"
										placeholder="Please refer the below grading table *"
										type="text"
										isValid={!errors.grade && touched.grade}
										isInvalid={errors.grade && touched.grade}
									/>
									{errors.grade && touched.grade ? (
										<Form.Control.Feedback type="invalid">{errors.grade}</Form.Control.Feedback>
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
