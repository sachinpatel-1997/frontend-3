// import api from "../../service/api";
// import { GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE } from "./actionTypes";
import { userConstants } from "../../constants/userConstants";
import { userService } from "../../services/user.service";
import history from "../../utils/history";
import { pushNotification } from "../../utils/notifications";

export const userActions = {
  updateAdmin,
};




function updateAdmin(id, user) {
  return (dispatch) => {
    dispatch(request());

    userService.updateAdmin(id, user).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
        pushNotification("profile update successfully", "success");
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log("error", error);
        pushNotification(error.response.data.message, "error");
      }
    );
  };

  function request(id) {
    return { type: userConstants.UPDATEADMIN_REQUEST };
  }
  function success(userData) {
    return { type: userConstants.UPDATEADMIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.UPDATEADMIN_FAILURE, error };
  }
}




