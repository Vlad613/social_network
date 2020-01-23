import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MyFriends from "../Friends/MyFriends";

const Navbar = (props) => {
    return <div className={s.navbar}>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>

        <div className={s.friends}>
            <MyFriends friends={props.sitebar.friends}/>
        </div>
    </div>
};

export default Navbar;

