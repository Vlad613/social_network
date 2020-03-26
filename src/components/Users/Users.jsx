import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../Picture/User_photo_small.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Usres = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.currentPage}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials: true,
                                    headers:{
                                        "API-KEY": "b410f667-cba0-4d42-8eb6-ac5667818eee"
                                    }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>Follow</button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {withCredentials: true,
                                        headers:{
                                            "API-KEY": "b410f667-cba0-4d42-8eb6-ac5667818eee"
                                        }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });
                            }}>Unfollow</button>}

                                </div>
                                </span>

                                <span>
                                <span>
                                <div> {u.name}</div>
                                <div>{u.status}</div>
                                </span>

                                <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                                </span>
                                </span>
            </div>)
        }
    </div>
}

export default Usres;