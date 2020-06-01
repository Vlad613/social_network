import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, requestUsers
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";


class UsersContainerComponent extends React.Component {
    componentDidMount() {
        // const {currentPage,pageSize} =this.props
        // this.props.requestUsers(currentPage, pageSize);

        this.props.requestUsers( this.props.currentPage,  this.props.pageSize);
    }

    onPageChanged = (page) => {
        // const {pageSize} =this.props
        // requestUsers(pageNumber, pageSize);

        this.props.requestUsers( page,  this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps;
mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
    })
)(UsersContainerComponent)