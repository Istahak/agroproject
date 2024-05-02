import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Message = ({ message }) => {
  return (
    <div className={`chat ${message.sender ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <AccountCircleIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
      <div className="chat-bubble">{message.content}</div>
    </div>
  );
};

export default Message;
