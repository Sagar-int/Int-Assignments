import { ADD_ATTENDENCE, ADD_SKILL, ADD_STUDENT, ADD_SUBJECT, EDIT_ATTENDENCE, EDIT_SKILL, EDIT_STUDENT, EDIT_SUBJECT } from "../action-types/action.types";

const initialState = {
	part1_data: [],
	part2_data: [],
	part3_data: [],
	student_data: null,
};

export const AcademicReducer = (state = initialState, { type, payload, index }) => {

	switch (type) {
		case ADD_SUBJECT:
			return {
				...state,
				part1_data: [...state.part1_data, payload],
			};

		case EDIT_SUBJECT:
			const EditSub = state.part1_data.map((e, i) =>
				i === index ? { ...e, subject: payload.subject, fa: payload.fa, f_oral: payload.f_oral, sa: payload.sa, s_oral: payload.s_oral, total_mark: payload.total_mark } : e
			);

			return {
				...state,
				part1_data: EditSub
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
				part2_data: EditSkill
			};

		case ADD_ATTENDENCE:
			return {
				...state,
				part3_data: [...state.part3_data, payload],
			};

		case EDIT_ATTENDENCE:
			const EditAttendece = state.part3_data.map((e, i) =>
				i === index ? { ...e, term: payload.term, present_days: payload.present_days, working_days: payload.working_days, percentage: payload.percentage } : e
			);

			return {
				...state,
				part3_data: EditAttendece
			};

		case ADD_STUDENT:
			return {
				...state,
				student_data: payload,
			};

		case EDIT_STUDENT:
			const EditStudent = state.part2_data.map((e, i) =>
				i === index ? { ...e, name: payload.name, dob: payload.dob, roll_no: payload.roll_no, std_class: payload.std_class, division: payload.division } : e
			);

			return {
				...state,
				student_data: EditStudent
			};

		default:
			return state;
	}
};