import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sitebar={props.state.sitebar}/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage }
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
