import React, { useState } from "react";
import "./Post.css";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
function Post({ name, time, text, image_url, like_count }) {
  const [liked, setLiked] = useState(isLiked());
  const [likeCount, setLikeCount] = useState(like_count);
  const handleClick = () => {
    if (!liked) {
      updateLike();
      setLiked(!liked);
      setLikeCount(likeCount + 1);
    }
  };
  return (
    <div className="post">
      <div className="postHeader">
        <PersonIcon className="head" />
        <span className="head">{name}</span>
        <AccessTimeFilledIcon className="head" />
        <span className="head">{time}</span>
      </div>
      <div className="postText">{text}</div>
      <div className="postImage">
        <img src={image_url} alt="No longer Available" />
      </div>
      <div className="postFooter">
        <div className="materialButtons">
          <div className="like-button" onClick={handleClick}>
            {liked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
          </div>
          <CommentIcon className="postButton" />
        </div>
        <span>Liked by {likeCount} people</span>
      </div>
    </div>
  );
}

export default Post;

function isLiked() {
  return false;
}
function updateLike() {
  return;
}
