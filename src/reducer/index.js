import taskReducer from "./../reducers/taskReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
