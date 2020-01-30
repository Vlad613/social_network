import React from 'react';
import s from './MyFriends.module.css'
import Friend from "./Friend/Friend";


const MyFriends = (props) => {
    let friendElement = props.sitebar.friends
        .map(p => <Friend ava={p.ava} name={p.name}/>);

    return <div className={s.postsBlock}>
        <h3>My Friends</h3>

        <div className={s.friend}>
            {friendElement}
        </div>
    </div>
};
export default MyFriends;