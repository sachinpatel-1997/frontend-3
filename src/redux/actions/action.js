export const getNews = () => ({
    type: 'GET_NEWS',
});

export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    userData
});

export const logOutUser = () => ({
    type: 'LOGOUT_USER',
});

export const setCurrentUser = (json) => ({
    type: 'SET_CURRENT_USER',
    json
});

export const GET_USERS = 'GET_USERS'
export const GET_USER_BY_ID = 'GET_USER_BYid'
export const CREATE_USER = 'CREATE_USER'
export const UPDATE_USER_BY_ID = 'UPDATE_USER_BYid'
export const DELETE_USER_BY_ID = 'DELETE_USER_BYid'
