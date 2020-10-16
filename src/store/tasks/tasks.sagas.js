import { put, takeLatest } from "redux-saga/effects";
import { TaskActions, TaskTypes } from "./tasks.ducks";

export function* getTasks({ payload }) {
  yield put(
    TaskActions.getTasksSuccess([
      { id: "1", title: "Something" },
      { id: "2", title: "Something more" },
      { id: "3", title: "Something else" },
      { id: "4", title: "Something again" },
    ])
  );
}

export function* watchSagas() {
  yield takeLatest(TaskTypes.GET_TASKS_REQUEST, getTasks);
}
