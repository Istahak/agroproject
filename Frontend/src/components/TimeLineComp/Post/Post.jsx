import React, { useState,useEffect } from "react";
import "./Post.css";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from "@mui/icons-material/Comment";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
function Post({ id, name, time, text, image_url, like_count, dislike_count,author_id}) {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(like_count);
  const [dislikeCount, setDisLikeCount] = useState(dislike_count);
  const navigate = useNavigate();
  const [postautorid,setpostautorid] = useState();
  // console.log("authorid",author_id)
  useEffect(() => {
    // Fetch updated likes and dislikes count after component mount
    async function fetchPostLikesDislikesCount() {
      try {
        const response = await axios.get(`http://localhost:8000/posts/${id}/likes-dislikes/count`);
        setLikeCount(response.data.likes_count);
        setDisLikeCount(response.data.dislikes_count);
      } catch (error) {
        console.error("Error fetching post likes and dislikes count:", error);
      }
    }
    fetchPostLikesDislikesCount();
  }, [id]);

  const handleLikeClick = async () => {
    try {
      // Get the authentication token from local storage
      const authTokenString = localStorage.getItem("auth");
      if (!authTokenString) {
        // If token is not available, handle the error
        throw new Error("Authentication token not found in localStorage");
      }
      const authToken = JSON.parse(authTokenString);
  
      // Send like request to backend with token in headers
      await axios.post("http://localhost:8000/likes", {
        post_id: id,
        Type: "like",
      }, {
        headers: {
          Authorization: `Bearer ${authToken.access_token}`,
        },
      });
      console.log("Like clicked");
      // Update like state and count
      setLiked(true);
      setLikeCount(prevCount => prevCount + 1);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };
  
  const handleDisLikeClick = async () => {
    try {
      // Get the authentication token from local storage
      const authTokenString = localStorage.getItem("auth");
      if (!authTokenString) {
        // If token is not available, handle the error
        throw new Error("Authentication token not found in localStorage");
      }
      const authToken = JSON.parse(authTokenString);
  
      // Send dislike request to backend with token in headers
      await axios.post("http://localhost:8000/likes", {
        post_id: id,
        Type: "dislike",
      }, {
        headers: {
          Authorization: `Bearer ${authToken.access_token}`,
        },
      });
      console.log("Dislike clicked");
      // Update dislike state and count
      setDisLiked(true);
      setDisLikeCount(prevCount => prevCount + 1);
    } catch (error) {
      console.error("Error disliking post:", error);
    }
  };

  const onclickhandlername = () => {
    console.log("authorid",author_id)
    localStorage.setItem("profileId", author_id);
    navigate(`/profile`);
  };
  
  return (
    <div className="post">
      <div className="postHeader">
        <PersonIcon className="head" />
        <span className="head" onClick={onclickhandlername}>{name}</span>
        <AccessTimeFilledIcon className="head" />
        <span className="head">{time}</span>
      </div>
      <div className="postText">{text}</div>
      <div className="postImage">
        <img src={image_url} alt="No longer Available" />
      </div>
      <div className="postFooter">
        <div className="materialButtons">
          <div className="like-button" onClick={handleLikeClick}>
            {liked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
          </div>
          <div className="like-button" onClick={handleDisLikeClick}>
            {disLiked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
          </div>
         <Link to={`/comment/${id}`}>
          <CommentIcon className="postButton" />
          </Link>
        </div>
        <span className="">Liked by {(likeCount==null) ? 0 : likeCount} people</span>
        <br />
        <span className="">Disliked by {(dislikeCount==null) ? 0 : dislikeCount}  people</span>
      </div>
    </div>
  );
}

export default Post;
