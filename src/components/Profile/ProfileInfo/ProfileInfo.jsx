import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../Picture/User_photo_small.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({
                         profile,
                         status,
                         updateStatus,
                         isOwner,
                         savePhoto
                     }) => {

    if (!profile) {
        return <Preloader/>;

    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (<div>
            <div className={s.headerImage}>
                {isOwner && <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='image rocks'/>}
            </div>

            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto}
                     src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>

            <div>
                <span>{profile.aboutMe}</span>
            </div>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

        </div>
    )
};


export default ProfileInfo;