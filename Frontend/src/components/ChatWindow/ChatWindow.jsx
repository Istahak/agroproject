// ChatWindow.js
import React from 'react';
import './ChatWindow.css';
import Chat from './Chat'
const ChatWindow = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="chat-window">
      {/* Your chat window content goes here */}
      <Chat/>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ChatWindow;
