import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { Reducer as UserReducer } from "./UserReducer/Reducer";
import { Reducer as TaskReducer } from "./TaskReducer/Reducer";
const rootReducer = combineReducers({
  UserReducer,
  TaskReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
