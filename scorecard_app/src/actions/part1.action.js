import { ADD_SUBJECT } from "../action-types/action.types"

export const addSubjectDetails = (data) => {
    return {
        type: ADD_SUBJECT,
        payload:data,
    }
}