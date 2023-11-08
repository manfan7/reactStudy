import React from "react";
import Users from "./Users";

import Preloader from "../common/preloader/preloader";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    /* this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.items);
      this.props.setTotalUsersCount(response.totalCount / 100);
    }); */
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    /* this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.items);
    }); */
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

export default UsersApiComponent;
