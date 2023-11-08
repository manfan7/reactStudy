const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 15 },
    { id: 3, message: "It's my second post", likesCount: 7 },
  ],
  newPostText: "",
  profile: null,
};
export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export let updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text,
  };
};
export let setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      };

      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case "UPDATE-NEW-POST-TEXT": {
      return { ...state, newPostText: action.newPostText };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
