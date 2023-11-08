let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      };
    }

    case "UPDATE-NEW-MESSAGE-TEXT": {
      return {
        ...state,
        newMessageText: action.newMessageText,
      };
    }

    default:
      return state;
  }
};
export let addMessageActionCreator = () => {
  return {
    type: "ADD-MESSAGE",
  };
};
export let updateNewNessageActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessageText: text,
  };
};
export default dialogsReducer;
