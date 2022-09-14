<<<<<<< HEAD
import { ADD_SKILL, DELETE_SKILL, EDIT_SKILL } from "../action-types/action.types"
=======
import { ADD_SKILL, EDIT_SKILL } from "../action-types/action.types"
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65

export const addSkillDetails = (data) => {
    return {
        type: ADD_SKILL,
        payload:data,
    }
}

export const editSkillDetails = (data, index) => {
    return {
        type: EDIT_SKILL,
        payload:data,
        index:index
    }
<<<<<<< HEAD
}

export const deleteSkillDetails = (index) => {
    return {
        type: DELETE_SKILL,
        index:index
    }
=======
>>>>>>> 8c278d5df369dbaffa85183290cd95c5b6a29a65
}