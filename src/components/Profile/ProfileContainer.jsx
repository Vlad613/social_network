import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import profileReducer, {setUsersProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let UserId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + UserId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
});

let withUrlDataContainetComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(withUrlDataContainetComponent, ProfileContainer);