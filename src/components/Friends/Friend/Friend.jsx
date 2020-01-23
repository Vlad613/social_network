import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
    return (

        <div className={s.item}>
            <img src={props.ava} alt='Photo'/>
            <div>
                <span>{props.name}</span>
            </div>
        </div>


    )
};
export default Friend;