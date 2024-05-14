import React, { useState, useEffect } from "react";
import "./TimeLine.css";
import Sidenav from "../components/SideNavbar/SideNavBar.jsx";
import Feed from "../components/TimeLineComp/TimeLineComp.jsx";


import { formatDistanceToNow, parseISO } from 'date-fns';

const formatTimeAgo = (timestamp) => {
  const date = new Date(timestamp);
  // update for Dhaka timezone
  date.setHours(date.getHours() + 6);
  return formatDistanceToNow(date, { addSuffix: true });
};




function TimeLine() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:8000/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      // console.log(data[0].author_id);
      setPostData(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="TimeLine">
      <div className="navBar">
        <Sidenav />
      </div>
      <div className="timeLine">
        {postData.map((post) => (
          <Feed
            key={post.id}
            id = {post.id}
            name={post.author.Username}
            time={formatTimeAgo(post.timestamp)}
            text={post.content}
            image_url={post.image_url}
            like_count={post.likes_count}
            dislike_count = {post.dislike_count}
            author_id ={post.author_id}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
