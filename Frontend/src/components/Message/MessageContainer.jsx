import React, { useState, useContext,useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { ConversationContext } from "../../Context/ConversationContext";
import axios from "axios";
const MessageContainer = () => {
  // Initialize noChatSelected as true using useState
  const { selectedConversation } = useContext(ConversationContext);
  const { id, name } = selectedConversation || {};
  const [messageList, setMessageList] = useState([]);


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

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/chat/${currentUser.user_id}+${id}`);
        let newList = [];
        for (let i = 0; i < response.data.length; i++) {
          let newObj = {
            id: response.data[i].chat_id,
            sender: response.data[i].sender,
            content: response.data[i].message,
            timestamp: response.data[i].timestamp,
          }
          newList.push(newObj);
        }
        setMessageList(newList);
        
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
  
    if (currentUser) {
      // Clear messageList before fetching new messages
      setMessageList([]);
      fetchMessages();
    }
  }, [currentUser, id]);
  


  const handleSendMessage = (newMessage) => {
    let newObj = {
      id: 1,
      sender: true,
      content: newMessage,
      timestamp: new Date(),
    };
    const updatedMessages = [...messageList, newObj];
    setMessageList(updatedMessages);
  };
    console.log(id, name);
  return (
    <div className="md:min-w-[710px] flex flex-col">
      {selectedConversation == null ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-black-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-black-900 font-bold">{name}</span>
          </div>

          <Messages messages={messageList} />
          <MessageInput
            onSendMessage={handleSendMessage}
            conversationId={id}
            conversationName={name}
          />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  // No changes needed here
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {name}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

function getMessages() {
  let messages = [
    {
      id: 1,
      sender: true,
      content: "Hello there!",
      timestamp: new Date("2024-04-25T10:30:00"),
    },
    {
      id: 2,
      sender: false,
      content: "Hi John, how are you?",
      timestamp: new Date("2024-04-25T10:35:00"),
    },
    {
      id: 3,
      sender: true,
      content: "I'm doing well, thank you!",
      timestamp: new Date("2024-04-25T10:40:00"),
    },
    {
      id: 4,
      sender: false,
      content: "That's great to hear!",
      timestamp: new Date("2024-04-25T10:45:00"),
    },
  ];
  return messages;
  // Now you can use the messages array in your application
}
