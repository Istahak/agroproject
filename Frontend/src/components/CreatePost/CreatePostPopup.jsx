import React, { useState } from 'react';
import './CreatePostPopup.css';
import axios from 'axios';

const CreatePostPopup = ({ onClose, postId }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the authentication token from local storage
      const authTokenString = localStorage.getItem("auth");
      if (!authTokenString) {
        // If token is not available, handle the error
        throw new Error("Authentication token not found in localStorage");
      }
      const authToken = JSON.parse(authTokenString);
      // Send comment request to backend with token in headers
      await axios.post("http://localhost:8000/comments", {
        content: text,
        post_id: postId,
      }, {
        headers: {
          Authorization: `Bearer ${authToken.access_token}`,
        },
      });
      // After successful posting, close the popup
      onClose();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="create-post-popup-container">
      <div className="create-post-popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Add Comment</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <div className="button-container">
            <button type="submit">Post</button>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPopup;
