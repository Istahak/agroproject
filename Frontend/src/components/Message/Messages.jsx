import React from "react";
import Message from "./Message";

const Messages = (messageObject) => {
  const messageList = messageObject.messages;
  // console.log(messageList[0]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messageList.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
export default Messages;
