import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogsReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";





let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sitebarReducer,
    usersReducer,
    authReducer,
});

let store = createStore(reducers);

export default store;