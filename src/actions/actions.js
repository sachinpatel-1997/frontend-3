import { ActionTypes } from './action-types';

export const addUser = (user) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: user
    }
}
export const addImage = (images) => {
    return {
        type: ActionTypes.IMAGE_USER_CREATE,
        payload: [(images || [])],
    }
}

export const editImage = (data) => {
    return {
        type: ActionTypes.IMAGE_USER_EDIT,
        payload: data
    }
}
export const getUsers = (results) => {
    return {
        type: ActionTypes.GET_USERS,
        payload: results
    }
}
export const getUser = (data) => {
    return {
        type: ActionTypes.GET_USER,
        payload: data

    }
}
export const updateUser = (id, data) => {
    return {
        type: ActionTypes.UPDATE_USER,
        id,
        data
    }
}
export const updateImage = (id, data) => {
    return {
        type: ActionTypes.IMAGE_USER_UPDATE,
        id,
        data
    }
}
export const deleteUser = () => {
    return {
        type: ActionTypes.DELETE_USER,
    }
}