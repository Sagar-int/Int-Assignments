// import jwt_decode from "jwt-decode";
import { LOGIN, LOGOUT } from "../action-types/action.types";

const initialState = {
  isloggedin: false,
  email: "",
  errorMsg: "",
  auth_token: "",
  userData: {},
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isloggedin:
          payload.token !== null || payload.token !== undefined ? true : false,
        auth_token: payload.token,
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
