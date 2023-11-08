import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.router.params.userID;
    if (!userID) {
      userID = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlDataContainerComponent);
