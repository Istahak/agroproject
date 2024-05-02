import React from "react";
import "./ChatHome.css";
import ChattingSideBar from "../ChattingSideBar/ChattingSideBar";
import { ConversationProvider } from "../../Context/ConversationContext";
import MessageContainer from "../Message/MessageContainer";
function ChatHome() {
  return (
    <div className="chat-home">
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {/* <Sidebar />
         */}
        <ConversationProvider>
          <ChattingSideBar></ChattingSideBar>
          <MessageContainer />
        </ConversationProvider>
        {/* <MessageContainer /> */}
      </div>
    </div>
  );
}

export default ChatHome;
