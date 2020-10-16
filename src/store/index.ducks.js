import { combineReducers } from "redux";

import tasks from "./tasks/tasks.ducks";

const appReducer = () =>
  combineReducers({
    tasks,
  });

const Reducers = () => appReducer();

export default Reducers;
