import {LOGIN, LOGOUT } from "../action-types/action.types"

export const setupUserLogin = (data) => {
    
    return {
        type: LOGIN,
        payload:data,
    }
}

export const setupUserLogout = (data) => {
    console.log("====setupUserLogout====");
    return {
        type: LOGOUT,
        payload:data,
    }
}