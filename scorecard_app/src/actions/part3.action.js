<<<<<<< HEAD
import { ADD_ATTENDENCE, DELETE_ATTENDENCE, EDIT_ATTENDENCE } from "../action-types/action.types"
=======
import { ADD_ATTENDENCE, EDIT_ATTENDENCE } from "../action-types/action.types"
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65

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
<<<<<<< HEAD
}

export const deleteAttendenceDetails = (index) => {
    return {
        type: DELETE_ATTENDENCE,
        index:index
    }
=======
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
}