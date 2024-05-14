import React from "react";
import "../assets/Style/Profile.css";
import Profilecard from "../components/ProfileCard/profilecard";
import Feed from "../components/TimeLineComp/TimeLineComp.jsx";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
const formatTimeAgo = (timestamp) => {
  const date = new Date(timestamp);
  date.setHours(date.getHours() + 6);
  return formatDistanceToNow(date, { addSuffix: true });
};

const p = [
  {
    id: 1,
    author: {
      id: 1,
      Username: "John Doe",
    },
    timestamp: "1 hour ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_url: "https://source.unsplash.com/random",
    likes_count: 10,
    dislike_count: 5,
  },
  {
    id: 2,
    author: {
      id: 2,
      Username: "Jane Doe",
    },
    timestamp: "2 hours ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_url: "https://source.unsplash.com/random",
    likes_count: 20,
    dislike_count: 10,
  },
];

function Profile() {
  const [profileid, setProfileid] = useState();

  const [postData, setPostData] = useState([]);

  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("profileId");
    setProfileid(userId); // This triggers a re-render
    // profileid is not immediately updated here

    // remove from  local storage
    // localStorage.removeItem("profileId");
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  useEffect(() => {
    console.log("profileid", profileid); // Now profileid reflects the updated value
    if (profileid) {
      fetchPosts(); // Fetch posts only when profileid is updated
      fetchUser(); // Fetch user details only when profileid is updated
    }
  }, [profileid]); // Run this effect whenever profileid changes

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/posts/${profileid}`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      console.log(data);
      setPostData(data);
      setTotalPostsCount(data.length);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/users/${profileid}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div
      className="Profile"
      style={{
        background:
          "linear-gradient(rgba(114, 189, 251, 0.2), rgba(154, 245, 126, 0.2))",
      }}
    >
     <Profilecard username={user.Username} totalPostsCount={totalPostsCount} />

      <div className="feed-container d-flex justify-content-center">
        <div className="feed-wrapper">
          {postData.map((post) => (
            <Feed
              key={post.id}
              id={post.id}
              name={post.author.Username}
              time={formatTimeAgo(post.timestamp)}
              text={post.content}
              image_url={post.image_url}
              like_count={post.likes_count}
              dislike_count={post.dislike_count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
