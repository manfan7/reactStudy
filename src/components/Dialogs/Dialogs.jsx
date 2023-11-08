import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  let MessageTextArea = React.createRef();
  let addMessage = () => {
    let text = MessageTextArea.current.value;
    if (text != "") {
      props.addMessage();
    }
  };
  let onMessageChange = () => {
    let text = MessageTextArea.current.value;
    console.log(text);
    props.onMessageChange(text);
  };
  let dialogsElements = props.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });
  let messagesElements = props.messagesData.map((el) => {
    return <Message message={el.message} id={el.id} />;
  });
  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>{dialogsElements}</div>
        <div className={style.messages}>{messagesElements}</div>
      </div>
      <div className={style.MessageTextArea}>
        <textarea
          name="newArea"
          id={style.newArea}
          placeholder="write your message"
          value={props.newMessageText}
          ref={MessageTextArea}
          onChange={onMessageChange}
        />
        <button onClick={addMessage}>Add Message</button>
      </div>
    </div>
  );
};
export default Dialogs;
