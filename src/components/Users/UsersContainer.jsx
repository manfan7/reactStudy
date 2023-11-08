import React from "react";
import UsersApiComponent from "./UsersC";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsersThunkCreator,
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
/* let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};   redux-store  выполняет dispatch экшен креаторов под капотом, поэтому можно записать следующм образом  */

let UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  /* setUsers: setUsersAC, */
  /* setCurrentPage: setCurrentPageAC, */
  /* setTotalUsersCount: setTotalUsersCountAC, */
  /* toggleIsFetching: toggleIsFetchingAC, */
  /* toggleFollowingProgress, */
  getUsers: getUsersThunkCreator,
})(UsersApiComponent);
export default UsersContainer;
