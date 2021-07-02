import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";


export const store = createStore(
    combineReducers({
        authStore:authReducer
    }),
    applyMiddleware(thunk)
)