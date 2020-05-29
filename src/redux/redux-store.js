import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogsReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./AuthReducer";
import thunkMiddlrware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./AppReducer";





let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sitebarReducer,
    usersReducer,
    authReducer,
    appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlrware)));

window._store_ = store;

export default store;