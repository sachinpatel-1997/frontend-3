import * as actionTypes from "./actionTypes";



export const userSignupRequest = () => {
  return {
    type: actionTypes.USER_SIGNUP_REQUEST,
  };
};
export const userSignupSuccess = (user) => {
  return {
    type: actionTypes.USER_SIGNUP_SUCCESS,
    payload: user,
  };
};
export const userSignupFailure = (error) => {
  return {
    type: actionTypes.USER_SIGNUP_FAILURE,
    payload: error,
  };
};



export const userLoginRequest = () => {
  return {
    type: actionTypes.USER_LOGIN_REQUEST,
  };
};
export const userLoginSuccess = (user) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: user,
  };
};
export const userLoginFailure = (error) => {
  return {
    type: actionTypes.USER_LOGIN_FAILURE,
    payload: error,
  };
};



export const loadUserRequest = () => {
  return {
    type: actionTypes.USER_RELOAD_REQUEST,
  };
};
export const loadUserSuccess = (token) => {
  return {
    type: actionTypes.USER_RELOAD_SUCCESS,
    payload: token,
  };
};
export const loadUserFailure = (error) => {
  return {
    type: actionTypes.USER_RELOAD_FAILURE,
    payload: error,
  };
};


export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

