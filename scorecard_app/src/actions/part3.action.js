import { ADD_ATTENDENCE } from "../action-types/action.types"

export const addAttendenceDetails = (data) => {
    return {
        type: ADD_ATTENDENCE,
        payload:data,
    }
}