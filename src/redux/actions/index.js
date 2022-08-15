import { all } from 'redux-saga/effects';
import actionLoginUser from './reducers/sagas/userSaga';

export default function* rootSaga() {
    yield all([
        actionLoginUser(),
    ]);
}