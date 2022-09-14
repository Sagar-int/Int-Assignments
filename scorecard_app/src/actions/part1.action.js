<<<<<<< HEAD
import { ADD_SUBJECT, DELETE_SUBJECT, EDIT_SUBJECT } from "../action-types/action.types"
=======
import { ADD_SUBJECT, EDIT_SUBJECT } from "../action-types/action.types"
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65

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
<<<<<<< HEAD
}

export const deleteSubjectDetails = (index) => {
    return {
        type: DELETE_SUBJECT,
        index:index
    }
=======
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
}