import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='image rocks'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <span>{props.profile.aboutMe}</span>
            </div>
        </div>
    )
};
export default ProfileInfo;