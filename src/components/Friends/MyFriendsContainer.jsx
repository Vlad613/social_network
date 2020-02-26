import React from 'react';
import s from './MyFriends.module.css'
import Friend from "./Friend/Friend";
import {connect} from "react-redux";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/ProfileReducer";
import MyFriends from "./MyFriends";


// const MyFriends = (props) => {
//     let friendElement = props.store.getState().sitebarReducer.friends
//         .map(p => <Friend ava={p.ava} name={p.name}/>);
//
//     return <div className={s.postsBlock}>
//         <h3>My Friends</h3>
//
//         <div className={s.friend}>
//             {friendElement}
//         </div>
//     </div>
// };

let mapStateToProps=(state)=> {
    return {
        friends: state.sitebarReducer.friends,
    }
};

let mapDispatchToProps=(dispatch)=> {
    return {

    }
};

const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (MyFriends);

export default MyFriendsContainer;