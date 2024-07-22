import { combineReducers } from "redux";
import todoReducer from "./Todo/todoReducer";

const rootReducer = combineReducers({
    data : todoReducer,
})


export default rootReducer