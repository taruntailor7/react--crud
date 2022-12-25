import {dataReducer} from "./reducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk);
export const store = createStore( dataReducer, middlewares);