import { ADD_SKILL } from "../action-types/action.types"

export const addSkillDetails = (data) => {
    return {
        type: ADD_SKILL,
        payload:data,
    }
}