import { createActions, createReducer } from "reduxsauce";

export const { Types: TaskTypes, Creators: TaskActions } = createActions({
  getTasksRequest: ["payload"],
  getTasksSuccess: ["payload"],
  onArchiveTask: ["payload"],
});

const INITIAL_STATE = {
  tasks: [],
};

const getTasksRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    tasks: [],
  };
};

const getTasksSuccess = (state = INITIAL_STATE, { payload }) => {
  return {
    ...state,
    tasks: payload,
  };
};

const onArchiveTask = (state = INITIAL_STATE, { payload }) => {
  console.log(payload);
  return {
    ...state,
    tasks: state.tasks.filter((task) => task.id !== payload),
  };
};

export default createReducer(INITIAL_STATE, {
  [TaskTypes.GET_TASKS_REQUEST]: getTasksRequest,
  [TaskTypes.GET_TASKS_SUCCESS]: getTasksSuccess,
  [TaskTypes.ON_ARCHIVE_TASK]: onArchiveTask,
});
