import { all } from 'redux-saga/effects';
import actionLoginUser from './userSaga';
import { watchUsersAsync } from "./user";

export default function* rootSaga() {
    yield all([
        actionLoginUser(),
        watchUsersAsync()
    ]);
}

