import { useState } from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = ({ onSendMessage, conversationId, conversationName }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log("hei");
    e.preventDefault();
    // Call the callback function from the parent component
    onSendMessage(inputValue);
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
