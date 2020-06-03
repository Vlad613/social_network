import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileInfoIsMy from "./ProfileInfoIsMy";


const ProfileInfo = ({profile, status, updateStatus, userId}) => {

    if (!profile) {
        return <Preloader/>
    }
    return <ProfileInfoIsMy
                            profile={profile}
                            status={status}
                            updateStatus={updateStatus}/>
};


export default ProfileInfo;