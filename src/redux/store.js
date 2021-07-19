import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import friendListReducer from "./friendsList/reducer";
import notiListReducer from "./notification/reducer";
import postListReducer from "./post/reducer";
import socketReducer from "./socket/reducer";
import userInfoReducer from "./userInfo/reducer";


export const store = createStore(
    combineReducers({
        authStore:authReducer,
        userInfoStore:userInfoReducer,
        friendListStore:friendListReducer,
        socketStore:socketReducer,
        notiListStore:notiListReducer,
        postListStore:postListReducer
    }),
    applyMiddleware(thunk)
)