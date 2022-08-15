import api from "../services/api";
 import { tokenService } from "./tokenService";

export const userService = {
  
  updateAdmin,
 
};



async function updateAdmin(id, userData) {
  const user = tokenService.getUser();

  try {
    const response = await api.patch(`/v1/users/${id}`, userData);

    if (user.user.id === id) {
      user.user = response.data;
      tokenService.setUser(user);
    }

    return response.data;
  } catch (error) {
    console.log("error", error);
    return Promise.reject(error);
  }
}


