import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import( './components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import( './components/Profile/ProfileContainer'));

class App extends Component {
    handleAllUnhandledError = (promiseRejectionEvent) => {
        alert("Some error occured");
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.handleAllUnhandledError);
    };

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.handleAllUnhandledError);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div class='appContent'>
                <Navbar/>
                <div class='app-wrapper-content'>

                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>,
        </Provider>
    </HashRouter>

};

export default SamuraiJSApp;


