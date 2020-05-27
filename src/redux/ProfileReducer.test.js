import profileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likeCounts: '12'},
        {id: 1, message: "It's, my fierst post", likeCounts: '11'},
        {id: 2, message: 'Hi!', likeCounts: '22'},
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('Hi, i am here to');
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(4);
});


it('message of new post should be correct', () => {
    let action = addPostActionCreator('Hi, i am here to');
    let newState = profileReducer(state, action);
    expect (newState.posts[3].message).toBe('Hi, i am here to');
});

it('after deleting length of message should be decrement ', () => {
    let action = deletePost (1);
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(3);
});
