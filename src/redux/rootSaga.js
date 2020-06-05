import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSaga";

export default function* rootSaga() {
  // initial all tasks at once.
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
