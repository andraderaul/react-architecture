import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import Reducers from "./index.ducks";
import Sagas from "./index.sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  Reducers(),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(Sagas);
