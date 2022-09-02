import { ADD_SKILL, EDIT_SKILL } from "../action-types/action.types"

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
}