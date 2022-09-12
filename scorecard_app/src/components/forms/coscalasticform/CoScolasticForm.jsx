/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { addSkillDetails, editSkillDetails } from '../../../actions/part2.action';
import { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';

export const CoScolasticForm = () => {
	const { editRow, id, handleClose } = useContext(DataContext);
	const { part2_data } = useSelector((state) => state.AcademicReducer);
	const selectedSkills = part2_data.map((ele) => ele.skill);
	const dispatch = useDispatch();

	const initialValues = {
		skill: !editRow ? part2_data[id].skill : '',
		grade: !editRow ? part2_data[id].grade : '',
	};

	const skills = [
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

	const grade = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D'];

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
		alert(`${values.skill} skill added successfully`);
	};

	const handleEditSkill = (values, actions) => {
		dispatch(editSkillDetails(values, id));
		actions.setSubmitting(false);
		actions.resetForm();
		handleClose();
		alert(`${values.skill} skill edited successfully`);
	};

	return (
		<Formik
			validationSchema={part2ValidationSchema}
			initialValues={initialValues}
			onSubmit={editRow ? handleAddSkill : handleEditSkill}
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

										{editRow
											? skills.map((skill, i) => {
													return (
														!selectedSkills.includes(skill) && <option key={i}>{skill}</option>
													);
											  })
											: skills.map((skill, i) => {
													return <option key={i}>{skill}</option>;
											  })}
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
									<Form.Select
										aria-label="Default select example"
										value={values.grade}
										onChange={(e) => handleInputChange('grade', e, setFieldValue)}
										onBlur={handleBlur} // This apparently updates `touched`
										name="grade"
										isValid={!errors.grade && touched.grade}
										isInvalid={errors.grade && touched.grade}
									>

										{editRow ? (
											<option disabled value="">
												--Please choose a grade--
											</option>
										) : (
											<option selected hidden value={part2_data[id].skill}>
												{part2_data[id].grade}
											</option>
										)}
										{grade.map((skill) => (
											<option>{skill}</option>
										))}
									</Form.Select>

									{errors.grade && touched.grade ? (
										<Form.Control.Feedback type="invalid">{errors.grade}</Form.Control.Feedback>
									) : (
										<Form.Control.Feedback>Look+s good!</Form.Control.Feedback>
									)}
								</InputGroup>
							</Col>
							<Col xs="auto">
								{editRow ? (
									<Button type="submit" className="mb-2" disabled={isSubmitting}>
										{isSubmitting ? 'Adding' : 'Add'}
									</Button>
								) : (
									<Button type="submit" className="mb-2" disabled={isSubmitting}>
										{isSubmitting ? 'editing' : 'edit'}
									</Button>
								)}
							</Col>
						</Row>
					</FormikForm>
				);
			}}
		</Formik>
	);
};
