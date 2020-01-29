import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/ProfileReducer";



const MyPosts = (props) => {

    let postsElement = props.profilePage.posts
        .map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = (updateNewPostTextCreator(text));
        props.dispatch(action);
    };


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};
export default MyPosts;