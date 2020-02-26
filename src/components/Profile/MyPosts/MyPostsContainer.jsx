import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/DialogsReducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//     let addPost = () => {
//         props.store.dispatch(addPostCreator());
//     };
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextCreator(text);
//         props.store.dispatch(action);
//     };
//
//
//     return (<MyPosts updateNewPostText={onPostChange}
//                      addPost={addPost}
//                      posts={state.profileReducer.posts}
//                      newPostText={state.profileReducer.newPostText}
//     />)
// };

let mapStateToProps=(state)=> {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
};

let mapDispatchToProps=(dispatch)=> {
    return {
        updateNewPostText: (text)=> {
            dispatch(updateNewPostTextCreator(text));
        },

        addPost: ()=> {
            dispatch(addPostCreator());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;