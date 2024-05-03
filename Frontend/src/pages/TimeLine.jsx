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
        <Feed />
        <Feed />
        <Feed />
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
      line_count: 5,
    },
    {
      postid: 2,
      name: "Jane Smith",
      time: "1 day ago",
      text: "Another post here.",
      image_url: "https://example.com/image2.jpg",
      line_count: 8,
    },
    // Add more posts as needed
  ];
  return posts;
}
