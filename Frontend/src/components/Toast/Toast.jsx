import React from "react";
import "./Toast.css";

const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <span className="message">{message}</span>
      <button className="close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
