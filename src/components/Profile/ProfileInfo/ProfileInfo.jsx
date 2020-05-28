import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.headerImage}>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='image rocks'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
            </div>
            <div>
                <span>{profile.aboutMe}</span>
            </div>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

        </div>
    )
};
export default ProfileInfo;