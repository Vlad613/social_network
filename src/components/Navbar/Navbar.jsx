import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MyFriendsContainer from "../Friends/MyFriendsContainer";

const Navbar = (props) => {

    return <div className={s.navbar}>
        <nav className={s.nav}>
            <div className={s.item}>
                <svg className={s.svgContainer}>
                    <path fill="#9A9FBF"
                          d="M12,4c1.654,0,3,1.346,3,3s-1.346,3-3,3c-1.654,0-3-1.346-3-3S10.346,4,12,4 M12,2C9.239,2,7,4.239,7,7 c0,2.762,2.239,5,5,5c2.762,0,5-2.238,5-5C17,4.239,14.762,2,12,2L12,2z"></path>
                    <rect x="11" y="20" fill="#9A9FBF"></rect>
                    <path fill="#9A9FBF"
                          d="M17,14H7c-2.209,0-4,1.791-4,4v4h6v-2H5v-2c0-1.104,0.897-2,2-2h10c1.104,0,2,0.896,2,2v2h-4v2h6v-4 C21,15.791,19.209,14,17,14z"></path>
                </svg>
                <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <svg className={s.svgContainer}>
                    <g>
                        <g>
                            <path
                                fill="#9A9FBF"
                                d="M14,12H6v2h8V12z M6,18h8v-2H6V18z M16,12v6h2v-6H16z M20,2H4C2.896,2,2,2.896,2,4v6h18v10H4v-4H2v4 c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V4C22,2.896,21.104,2,20,2z M20,8H4V4h16V8z M4,12H2v2h2V12z M7,5H5v2h2V5z M10,5H8v2 h2V5z M13,5h-2v2h2V5z"></path>
                        </g>
                    </g>
                </svg>
                <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <svg className={s.svgContainer}>
                    <path fill="#9A9FBF"
                          d="M9,4c1.654,0,3,1.346,3,3s-1.346,3-3,3S6,8.654,6,7S7.346,4,9,4 M9,2C6.239,2,4,4.239,4,7 c0,2.762,2.239,5,5,5c2.762,0,5-2.238,5-5C14,4.239,11.762,2,9,2L9,2z"></path>
                    <rect x="8" y="20" fill="#9A9FBF"></rect>
                    <path fill="#9A9FBF"
                          d="M12,14H6c-2.209,0-4,1.791-4,4v4h4v-2H4v-2c0-1.104,0.897-2,2-2h6c1.104,0,2,0.896,2,2v2h-2v2h4v-4 C16,15.791,14.209,14,12,14z"></path>
                    <path fill="#9A9FBF"
                          d="M16,2.101v2.083C17.161,4.599,18,5.698,18,7s-0.839,2.401-2,2.816v2.083c2.282-0.463,4-2.48,4-4.899 S18.282,2.564,16,2.101z"></path>
                    <path fill="#9A9FBF" d="M18,14v2c1.104,0,2,0.896,2,2v2h-2v2h4v-4C22,15.791,20.209,14,18,14z"></path>
                </svg>
                <NavLink to='/Users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <svg className={s.svgContainer}>
                    <path fill="#9A9FBF"
                          d="M19 23h2v-1.999h-2V23zm0-19.999h-2V2c0-.552-.447-1-1-1s-1 .448-1 1v1H9V2c0-.552-.448-1-1-1-.553 0-1 .448-1 1v1H5c-1.104 0-2 .895-2 2v16c0 1.105.896 2 2 2h12v-1.999H5V5h2v1c0 .552.447 1 1 1 .552 0 1-.448 1-1V5h6v1c0 .552.447 1 1 1s1-.448 1-1V5h2v14h2V5c0-1.104-.896-1.999-2-1.999zM8 19h2v-2H8v2zm3 0h2v-2h-2v2zm3 0h2v-2h-2v2zm-4-5H8v2.001h2V14zm3 0h-2v2.001h2V14zm3 0h-2v2.001h2V14zm-6-3H8v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2z"></path>
                </svg>
                <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <svg className={s.svgContainer}>
                    <path fill="#9A9FBF"
                          d="M7.508 11.001c-.569 0-1.087.198-1.508.519V11c0-.53.076-1.041.205-1.53L4.477 8.302C4.174 9.146 4 10.052 4 11v1.561c-1.19.691-2 1.962-2 3.439 0 2.027 1.515 3.676 3.469 3.938.453.64 1.196 1.062 2.039 1.062 1.379 0 2.5-1.121 2.5-2.498v-5.001c0-1.378-1.121-2.5-2.5-2.5zm-3.492 4.983c0-.733.402-1.362.992-1.705v3.408c-.59-.341-.992-.97-.992-1.703zm3.992 2.518c0 .275-.224.498-.5.498s-.5-.223-.5-.498v-5.001c0-.276.224-.5.5-.5s.5.224.5.5v5.001zM22 16c0-1.477-.81-2.748-2-3.439V11c0-4.418-3.582-8-8-8-.949 0-1.855.174-2.7.477l1.164 1.729C10.956 5.076 11.468 5 12 5c3.309 0 6 2.691 6 6v.521c-.421-.322-.939-.521-1.509-.521-1.38 0-2.5 1.122-2.5 2.5v5.001c0 1.377 1.12 2.498 2.5 2.498.842 0 1.585-.422 2.038-1.062C20.484 19.677 22 18.028 22 16zm-5.009 2.502c0 .275-.224.498-.5.498s-.5-.223-.5-.498v-5.001c0-.276.224-.5.5-.5s.5.224.5.5v5.001zm1.999-.814v-3.41c.591.342.994.972.994 1.706s-.403 1.364-.994 1.704zM6.021 4.979h2v2h-2z"></path>
                </svg>
                <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
        </nav>

        <div className={s.friends}>
            <MyFriendsContainer store={props.store}/>
        </div>
    </div>
};

export default Navbar;

