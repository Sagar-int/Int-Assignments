import { ADD_SUBJECT, DELETE_SUBJECT, EDIT_SUBJECT } from "../action-types/action.types"

export const addSubjectDetails = (data) => {
    return {
        type: ADD_SUBJECT,
        payload:data,
    }
}

export const editSubjectDetails = (data, index) => {
    return {
        type: EDIT_SUBJECT,
        payload:data,
        index:index
    }
}

export const deleteSubjectDetails = (index) => {
    return {
        type: DELETE_SUBJECT,
        index:index
    }
}