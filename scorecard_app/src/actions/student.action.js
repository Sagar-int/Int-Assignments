import { ADD_STUDENT } from "../action-types/action.types"

export const addStudentDetails = (data) => {
    return {
        type: ADD_STUDENT,
        payload:data,
    }
}