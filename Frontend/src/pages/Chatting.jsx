import React from "react";
import ChatHome from "../components/ChatHome/ChatHome";
import MainNav from "../components/MainNav/MainNav";
import "./Chatting.css";
function Chatting() {
  return (
    <>
      <MainNav></MainNav>
      <div className="chat-home max-h-screen">
        <div className="p-4 h-screen flex items-center justify-center">
          <ChatHome></ChatHome>
        </div>
      </div>
    </>
  );
}

export default Chatting;
