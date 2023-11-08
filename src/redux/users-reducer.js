import { usersApi } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};
export let followAC = (userID) => {
  return {
    type: FOLLOW,
    userID,
  };
};
export let unfollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    userID,
  };
};
export let setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export let setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export let setTotalUsersCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  };
};
export let toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export let toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUserCount: action.totalCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    usersApi.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setCurrentPageAC(currentPage));
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(response.items));
      dispatch(setTotalUsersCountAC(response.totalCount / 100));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersApi.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followAC(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersApi.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowAC(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
export default usersReducer;
