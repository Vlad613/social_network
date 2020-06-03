import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Picture/User_photo_small.png";


const ProfileInfoIsMy = ({profile, status, updateStatus, isOwner}) => {
    return (
        <div>
            <div className={s.headerImage}>
                {isOwner && <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='image rocks'/>}
            </div>

            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto}
                     src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={'file'}/>}
            </div>
            <div>
                <span>{profile.aboutMe}</span>
            </div>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

        </div>

    )
};


//
//         return <div>
//             <div className={s.descriptionBlock}>
//                 <img className={s.mainPhoto}
//                      src={profile.photos.large || userPhoto}/>
//             </div>
//             <div>
//                 <span>{profile.aboutMe}</span>
//             </div>
//             <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
//         </div>
//
//     }
//     return <div>
//         <div className={s.headerImage}>
//             <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt='image rocks'/>
//         </div>
//
//         <div className={s.descriptionBlock}>
//             <img className={s.mainPhoto}
//                  src={profile.photos.large || userPhoto}/>
//         </div>
//         <div>
//             <span>{profile.aboutMe}</span>
//         </div>
//
//         <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
//
//     </div>
// };


export default ProfileInfoIsMy;