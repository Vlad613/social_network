import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileInfoIsMy from "./ProfileInfoIsMy";


const ProfileInfo = ({
                         profile, status, updateStatus,
                         authorizedUserId
                     }) => {

    if (!profile) {
        return <Preloader/>
    }
    return <ProfileInfoIsMy
        authorizedUserId={authorizedUserId}
        profile={profile}
        status={status}
        updateStatus={updateStatus}/>
};


export default ProfileInfo;