import React from "react";
import ChatHome from "../components/ChatHome/ChatHome";
import Navbar from "../components/Navbar/Navbar";
import "./Chatting.css";
function Chatting() {
  return (
    <>
      <Navbar></Navbar>
      <div className="chat-home">
        <div className="p-4 flex items-center justify-center">
          <ChatHome></ChatHome>
        </div>
      </div>
    </>
  );
}

export default Chatting;
