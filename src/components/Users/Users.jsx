import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/uQd6WG5b5waRCJ3MpKa721WCmWzZb0W_Vi45nSNBE7o4oGHvGU-bG558sV5VV4kJB66Z-iMxkcue3a8q5c5Y5DrZZEPr73IxRl573nS3L0ZbUyfUnxlO5JSOqyLukFB-xeFynw ',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/uQd6WG5b5waRCJ3MpKa721WCmWzZb0W_Vi45nSNBE7o4oGHvGU-bG558sV5VV4kJB66Z-iMxkcue3a8q5c5Y5DrZZEPr73IxRl573nS3L0ZbUyfUnxlO5JSOqyLukFB-xeFynw ',
                followed: true,
                fullName: 'Petro',
                status: 'I am a big boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/uQd6WG5b5waRCJ3MpKa721WCmWzZb0W_Vi45nSNBE7o4oGHvGU-bG558sV5VV4kJB66Z-iMxkcue3a8q5c5Y5DrZZEPr73IxRl573nS3L0ZbUyfUnxlO5JSOqyLukFB-xeFynw ',
                followed: false,
                fullName: 'Vasily',
                status: 'I am a full boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}

                    </div>
                </span>

                <span>
                    <span>
                        <div> {u.fullName}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;