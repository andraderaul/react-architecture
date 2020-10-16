import { all } from "redux-saga/effects";
import * as taskSagas from "./tasks/tasks.sagas";

function* Sagas() {
  yield all([taskSagas.watchSagas()]);
}

export default Sagas;
