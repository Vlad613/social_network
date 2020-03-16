import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogsReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";





let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sitebarReducer,
    usersReducer,
});

let store = createStore(reducers);

export default store;