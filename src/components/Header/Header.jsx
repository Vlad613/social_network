import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {



    return <header className={s.header}>
        <div className={s.headerContent}>
            {/*<img src='https://yadi.sk/i/aRVcPaeQTbBufg' alt='logo'/>*/}
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div> {props.login}
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
                <a className={s.loginButton} onClick={props.logout}>Log out</a>
            </div>
        </div>
    </header>
};

export default Header
