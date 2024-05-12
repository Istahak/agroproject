import { useState, useEffect } from "react";
import { BsSend } from "react-icons/bs";

import axios from "axios";

const MessageInput = ({ onSendMessage, conversationId, conversationName }) => {
  const [inputValue, setInputValue] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const authTokenString = localStorage.getItem("auth");

      if (authTokenString) {
        try {
          const authToken = JSON.parse(authTokenString);
          const response = await axios.get("http://localhost:8000/users/me", {
            headers: {
              Authorization: `Bearer ${authToken.access_token}`,
            },
          });
          setCurrentUser(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      } else {
        console.error("Authentication token not found in localStorage");
      }
    };

    fetchCurrentUser();
  }, []);

  const sendMessage = async (message) => {
    try {
      const response = await axios.post("http://localhost:8000/chat", {
        chat_id: `${currentUser.user_id}+${conversationId}`,
        sender: true,
        message: message,
        timestamp: new Date().toISOString(), // Assuming you want to use the current timestamp
      });

      const response1 = await axios.post("http://localhost:8000/chat", {
        chat_id: `${conversationId}+${currentUser.user_id}`,
        sender: false,
        message: message,
        timestamp: new Date().toISOString(), // Assuming you want to use the current timestamp
      });

      console.log("Message sent successfully:", response.data);
      console.log("Message sent successfully:", response1.data);
      // Optionally, you can perform any other actions after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle errors appropriately
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log("hei");
    e.preventDefault();
    // Call the callback function from the parent component
    onSendMessage(inputValue);
    sendMessage(inputValue);
    console.log(conversationId, conversationName);
    // Clear the input field after sending the message
    setInputValue("");
  };

  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center text-white max-w-20"
          onClick={handleSubmit}
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
