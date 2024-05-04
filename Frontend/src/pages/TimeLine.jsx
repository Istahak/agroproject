import React, {useState} from "react";
import "./TimeLine.css";
import Sidenav from "../components/SideNavbar/SideNavBar.jsx";
import Feed from "../components/TimeLineComp/TimeLineComp.jsx";

function TimeLine() {
  const [postData, setPostData] = useState(getPosts());
  return (
    <div className="TimeLine">
      <div className="navBar">
        <Sidenav />
      </div>
      <div className="timeLine">
        {postData.map((post) => (
          <Feed
            key={post.postid} // Ensure each Feed component has a unique key
            name={post.name}
            time={post.time}
            text={post.text}
            image_url={post.image_url}
            like_count={post.like_count}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;

function getPosts() {
  let posts = [
    {
      postid: 1,
      name: "John Doe",
      time: "2 hours ago",
      text: "This is a sample post.",
      image_url: "https://example.com/image1.jpg",
      like_count: 5,
    },
    {
      postid: 2,
      name: "Jane Smith",
      time: "1 day ago",
      text: "Another post here.",
      image_url: "https://example.com/image2.jpg",
      like_count: 8,
    },
    // Add more posts as needed
  ];
  return posts;
}
