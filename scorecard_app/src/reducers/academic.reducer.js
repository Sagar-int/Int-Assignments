<<<<<<< HEAD
import {
	ADD_ATTENDENCE,
	ADD_SKILL,
	ADD_STUDENT,
	ADD_SUBJECT,
	DELETE_ATTENDENCE,
	DELETE_SKILL,
	DELETE_SUBJECT,
	EDIT_ATTENDENCE,
	EDIT_SKILL,
	EDIT_STUDENT,
	EDIT_SUBJECT,
} from '../action-types/action.types';
=======
import { ADD_ATTENDENCE, ADD_SKILL, ADD_STUDENT, ADD_SUBJECT, EDIT_ATTENDENCE, EDIT_SKILL, EDIT_STUDENT, EDIT_SUBJECT } from "../action-types/action.types";
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65

const initialState = {
	part1_data: [],
	part2_data: [],
	part3_data: [],
	student_data: null,
};

export const AcademicReducer = (state = initialState, { type, payload, index }) => {
<<<<<<< HEAD
=======

>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
	switch (type) {
		case ADD_SUBJECT:
			return {
				...state,
				part1_data: [...state.part1_data, payload],
			};

		case EDIT_SUBJECT:
			const EditSub = state.part1_data.map((e, i) =>
<<<<<<< HEAD
				i === index
					? {
							...e,
							subject: payload.subject,
							fa: payload.fa,
							f_oral: payload.f_oral,
							sa: payload.sa,
							s_oral: payload.s_oral,
							total_mark: payload.total_mark,
					  }
					: e
=======
				i === index ? { ...e, subject: payload.subject, fa: payload.fa, f_oral: payload.f_oral, sa: payload.sa, s_oral: payload.s_oral, total_mark: payload.total_mark } : e
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
			);

			return {
				...state,
<<<<<<< HEAD
				part1_data: EditSub,
			};

		case DELETE_SUBJECT:
			const AfterDeleteSub = state.part1_data.filter((ele, i) => i !== index);

			return {
				...state,
				part1_data: AfterDeleteSub,
=======
				part1_data: EditSub
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
			};

		case ADD_SKILL:
			return {
				...state,
				part2_data: [...state.part2_data, payload],
			};

		case EDIT_SKILL:
			const EditSkill = state.part2_data.map((e, i) =>
				i === index ? { ...e, skill: payload.skill, grade: payload.grade } : e
			);

			return {
				...state,
<<<<<<< HEAD
				part2_data: EditSkill,
			};

		case DELETE_SKILL:
			const AfterDeleteSkill = state.part2_data.filter((ele, i) => i !== index);

			return {
				...state,
				part2_data: AfterDeleteSkill,
=======
				part2_data: EditSkill
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
			};

		case ADD_ATTENDENCE:
			return {
				...state,
				part3_data: [...state.part3_data, payload],
			};

		case EDIT_ATTENDENCE:
			const EditAttendece = state.part3_data.map((e, i) =>
<<<<<<< HEAD
				i === index
					? {
							...e,
							term: payload.term,
							present_days: payload.present_days,
							working_days: payload.working_days,
							percentage: payload.percentage,
					  }
					: e
=======
				i === index ? { ...e, term: payload.term, present_days: payload.present_days, working_days: payload.working_days, percentage: payload.percentage } : e
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
			);

			return {
				...state,
<<<<<<< HEAD
				part3_data: EditAttendece,
			};

		case DELETE_ATTENDENCE:
			const AfterDeleteAttendence = state.part3_data.filter((ele, i) => i !== index);

			return {
				...state,
				part3_data: AfterDeleteAttendence,
=======
				part3_data: EditAttendece
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
			};

		case ADD_STUDENT:
			return {
				...state,
				student_data: payload,
			};

		case EDIT_STUDENT:
<<<<<<< HEAD
			const EditStudent = payload;

			return {
				...state,
				student_data: EditStudent,
=======
			const EditStudent = payload

			return {
				...state,
				student_data: EditStudent
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
			};

		default:
			return state;
	}
<<<<<<< HEAD
};
=======
};
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
