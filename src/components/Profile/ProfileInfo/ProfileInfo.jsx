import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileInfoIsMy from "./ProfileInfoIsMy";


const ProfileInfo = ({
                         profile,
                         status,
                         updateStatus,
                         isOwner
                     }) => {

    if (!profile) {
        return <Preloader/>
    }
    return <ProfileInfoIsMy
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}/>
};


export default ProfileInfo;