import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogsReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./AuthReducer";
import thunkMiddlrware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';





let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sitebarReducer,
    usersReducer,
    authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlrware));

export default store;