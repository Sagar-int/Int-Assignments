import { ADD_ATTENDENCE, DELETE_ATTENDENCE, EDIT_ATTENDENCE } from "../action-types/action.types"

export const addAttendenceDetails = (data) => {
    return {
        type: ADD_ATTENDENCE,
        payload:data,
    }
}

export const editAttendenceDetails = (data, index) => {
    return {
        type: EDIT_ATTENDENCE,
        payload:data,
        index:index
    }
}

export const deleteAttendenceDetails = (index) => {
    return {
        type: DELETE_ATTENDENCE,
        index:index
    }
}