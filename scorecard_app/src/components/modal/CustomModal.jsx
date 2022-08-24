import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from '../../contexts/DataContext';
import { AttendenceForm } from '../forms/attendence/AttendenceForm';
import { CoScolasticForm } from '../forms/coscalasticform/CoScolasticForm';
import { ScolasticForm } from '../forms/scolasticform/ScolasticForm';
import { StudentForm } from '../forms/studentform/StudentForm';

export const CustomModal = ({ ChildForm }) => {
	const { show, handleClose, handleShow } = useContext(DataContext);

	return (
		<>
			<Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
				{ChildForm === 'subject' ? (
					<Modal.Body>
						<ScolasticForm />
					</Modal.Body>
				) : ChildForm === 'skill' ? (
					<Modal.Body>
						<CoScolasticForm />
					</Modal.Body>
				) : ChildForm === 'attendence' ? (
					<Modal.Body>
						<AttendenceForm />
					</Modal.Body>
				) : ChildForm === 'student' ? (
					<Modal.Body>
						<StudentForm/>
					</Modal.Body>
				) : null}

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
