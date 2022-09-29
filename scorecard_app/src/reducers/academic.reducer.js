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
	LOGIN,
	LOGOUT,
} from '../action-types/action.types';

import jwt_decode from 'jwt-decode';

const initialState = {
	part1_data: [],
	part2_data: [],
	part3_data: [],
	student_data: null,
	isloggedin: false,
	email: '',
	errorMsg: '',
	auth_token: '',
	userData: {},
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
			);

			return {
				...state,
				part1_data: EditSub,
			};

		case DELETE_SUBJECT:
			const AfterDeleteSub = state.part1_data.filter((ele, i) => i !== index);

			return {
				...state,
				part1_data: AfterDeleteSub,
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
				part2_data: EditSkill,
			};

		case DELETE_SKILL:
			const AfterDeleteSkill = state.part2_data.filter((ele, i) => i !== index);

			return {
				...state,
				part2_data: AfterDeleteSkill,
			};

		case ADD_ATTENDENCE:
			return {
				...state,
				part3_data: [...state.part3_data, payload],
			};

		case EDIT_ATTENDENCE:
			const EditAttendece = state.part3_data.map((e, i) =>
				i === index
					? {
							...e,
							term: payload.term,
							present_days: payload.present_days,
							working_days: payload.working_days,
							percentage: payload.percentage,
					  }
					: e
			);

			return {
				...state,
				part3_data: EditAttendece,
			};

		case DELETE_ATTENDENCE:
			const AfterDeleteAttendence = state.part3_data.filter((ele, i) => i !== index);

			return {
				...state,
				part3_data: AfterDeleteAttendence,
			};

		case ADD_STUDENT:
			return {
				...state,
				student_data: payload,
			};

		case EDIT_STUDENT:
			const EditStudent = payload;

			return {
				...state,
				student_data: EditStudent,
			};

		case LOGIN:
			let decodeData = jwt_decode(payload.token);
		
			return {
				...state,
				isloggedin: payload.token !== null || payload.token !== undefined ? true : false,
				email: payload.user.email,
				auth_token: payload.token,
				userData: decodeData,
			};

		case LOGOUT:
			return {
				...initialState,
			};

		default:
			return state;
	}
};
