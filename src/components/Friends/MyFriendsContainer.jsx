import React from 'react';
import {connect} from "react-redux";
import MyFriends from "./MyFriends";



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