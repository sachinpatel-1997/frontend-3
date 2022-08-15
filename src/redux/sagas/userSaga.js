import { put, takeLatest } from 'redux-saga/effects';
 import setAuthToken from "../../utils/ setAuthToken";
// import jwt_decode from "jwt-decode";
import API from "../../api/api";

function* loginUser(userData) {
    try {
        const json = yield API.loginUser(userData.userData)
            .then(res => {
                // if (res.data.accessToken) {
                //     localStorage.setItem("user", JSON.stringify(res.data));
                //   }
                //   return res.data;

                const { token } = res.data;
                localStorage.setItem("jwtToken", token);
                setAuthToken(token);
                return res.data;
                // const decoded = jwt_decode(token);
                // return (decoded);
            })
            .catch(err => {
                throw err.response.data;
            });
        yield put({
            type: "SET_CURRENT_USER",
            json: json
        });
    }
    catch (error) {
        yield put({
            type: 'SET_CURRENT_USER_FAILED',
            error
        })
    }

}

function* logOutUser(userData) {
    // localStorage.removeItem("user");
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    yield put({
        type: "SET_CURRENT_USER",
        json: {},
    });
}

export default function* actionLoginUser() {
    yield takeLatest('LOGIN_USER', loginUser)
    yield takeLatest('LOGOUT_USER', logOutUser)
}

