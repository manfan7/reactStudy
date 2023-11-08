import React from "react";

import Dialogs from "./Dialogs";
import { addMessageActionCreator } from "../../redux/messages-reducer";
import { updateNewNessageActionCreator } from "../../redux/messages-reducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewNessageActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
