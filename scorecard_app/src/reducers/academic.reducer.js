import { ADD_ATTENDENCE, ADD_SKILL, ADD_SUBJECT } from "../action-types/action.types";

const initialState = {
    part1_data: [],
    part2_data: [],
    part3_data: [],
};

export const AcademicReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_SUBJECT:
			return {
				...state,
                part1_data: [...state.part1_data, payload],
			};

		case ADD_SKILL:
			return {
				...state,
                part2_data: [...state.part2_data, payload],
			};

		case ADD_ATTENDENCE:
			return {
				...state,
                part3_data: [...state.part3_data, payload],
			};

		default:
            return {
                ...state,
            };
	}
};