<<<<<<< HEAD
import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "../action-types/action.types"
=======
import { ADD_STUDENT, EDIT_STUDENT } from "../action-types/action.types"
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65

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
<<<<<<< HEAD
}

export const deleteAttendenceDetails = (index) => {
    return {
        type: DELETE_STUDENT,
        index:index
    }
=======
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
}