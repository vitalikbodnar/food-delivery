// Lib
import {combineReducers} from "redux";
import {positionReducers} from "./positionReducers";

export const rootReducer = combineReducers({
    position: positionReducers,
});