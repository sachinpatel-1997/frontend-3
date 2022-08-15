import api from "../services/api";
import { toast } from "react-toastify";
import * as actions from "./index";


export const register = (user) => {
  return (dispatch) => {
    dispatch(actions.userSignupRequest());
    api
      .post(`v1/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.tokens.access.token);
        dispatch(actions.userSignupSuccess(token));
       
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.userSignupFailure(errorMessage,"danger"));
        console.log(error);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};



export const loadUser = (refreshToken) => {
  return (dispatch) => {
    dispatch(actions.loadUserRequest());
    api
      .post(`/v1/auth/refresh-tokens`, refreshToken)
      .then((token) => {
        console.log(refreshToken)
        localStorage.setItem("token", token.data.access.token);
         localStorage.setItem(`refreshToken`, token.data.refresh.token);
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.loadUserFailure(errorMessage));
        toast.error(error.errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};


export const login = (user) => {
  return (dispatch) => {
    dispatch(actions.userLoginRequest());
    api
      .post(`v1/auth/login`, user)
      .then((token) => {
        // console.log(token)
        localStorage.setItem("token", token.data.tokens.access.token);
        dispatch(actions.userLoginSuccess(token));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.userLoginFailure(errorMessage));
        console.log(error);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};


export const logOut = () => {
  localStorage.removeItem("token");
  // localStorage.removeItem("refreshToken");
  localStorage.removeItem("redux");
  return (dispatch) => {
    dispatch(actions.userLogout());
  };
};
