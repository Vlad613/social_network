import React from 'react';

const ProfileStatusWithHooks =(props)=> {

        return (
            <div>
                {
                <div>
                    <span>{props.status || 'Status'}</span>
                </div>
                }
                {false &&
                <div>
                    <input autoFocus={true}/>
                </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;
