import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../Picture/User_photo_small.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({
                         profile,
                         status,
                         updateStatus,
                         isOwner,
                         savePhoto
                     }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>;

    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (<div>
            {/*<div className={s.headerImage}>*/}
            {/*    {isOwner && <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='image rocks'/>}*/}
            {/*</div>*/}

            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto}
                     src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode ? <ProfileDataForm profile={profile}/>
                    :
                    <ProfileData profile={profile}
                                 isOwner={isOwner}
                                 goToEditMode={() => {
                                     setEditMode(true)
                                 }}/>}

            </div>
        </div>
    )
};


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>My name is: </b><span>{profile.fullName}</span>
        </div>

        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>

        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
};

export default ProfileInfo;