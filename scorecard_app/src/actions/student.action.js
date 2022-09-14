import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "../action-types/action.types"

export const addStudentDetails = (data) => {
    return {
        type: ADD_STUDENT,
        payload:data,
    }
}

export const editStudentDetails = (data, index) => {
    return {
        type: EDIT_STUDENT,
        payload:data,
        index:index
    }
}

export const deleteAttendenceDetails = (index) => {
    return {
        type: DELETE_STUDENT,
        index:index
    }
}