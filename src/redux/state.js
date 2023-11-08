import dialogsReducer from "./messages-reducer";
import navReducer from "./nav-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 10 },
        { id: 2, message: "It's my first post", likesCount: 15 },
        { id: 3, message: "It's my second post", likesCount: 7 },
      ],
      newPostText: "",
    },
    messagesPage: {
      messagesData: [
        { id: 1, message: "hi" },
        { id: 2, message: "ho" },
        { id: 3, message: "How are you" },
        { id: 4, message: "it's messasge from burgundia" },
        { id: 5, message: "Victor" },
      ],
      newMessageText: "",
      dialogsData: [
        { id: 1, name: "Igor" },
        { id: 2, name: "Andrej" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Valkera" },
        { id: 5, name: "Victor" },
      ],
    },
    nav: {
      friendsList: [
        { id: 1, friend: "Igor", color: "#2E8B57" },
        { id: 2, friend: "Andre,j", color: "#8B0000" },
        { id: 3, friend: "Sasha", color: "#8B008B" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _rerender() {
    console.log("hello world");
  },

  subscribe(observer) {
    this._rerender = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.nav = navReducer(this._state.nav, action);
    this._rerender();
  },
};
