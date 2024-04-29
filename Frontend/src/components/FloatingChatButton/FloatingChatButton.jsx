// FloatingChatButton.js
import React, { useState } from 'react';
import './FloatingChatButton.css';
import ChatIcon from '@mui/icons-material/Chat';

const FloatingChatButton = ({ onClick }) => {
  return (
    <button className="floating-chat-button" onClick={onClick}>
      {/* Chat with Experts */}
      <ChatIcon/>
    </button>
  );
};

export default FloatingChatButton;
