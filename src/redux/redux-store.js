import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogsReducer";
import sitebarReducer from "./sitebarReducer";





let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sitebarReducer
});

let store = createStore(reducers);

export default store;