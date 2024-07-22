import { createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { applyMiddleware } from "redux";
import rootReducer from "./combineReducer";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run()

export default store