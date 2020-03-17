import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import usersReducer, {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../redux/usersReducer";

let mapStateToProps= (state)=> {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
};

let mapDispatchToProps =(dispatch)=>{
    return {
    follow: (userId)=> {
        dispatch(followAC(userId));
    },
        unfollow: (userId)=> {
        dispatch(unfollowAC(userId));
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber)=> {
        dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount)=> {
        dispatch(setUsersTotalCountAC(totalCount));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Users);