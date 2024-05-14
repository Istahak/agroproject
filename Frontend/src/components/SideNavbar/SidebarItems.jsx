import Profile from "./profile";
import CreatePost from "./CreatePost";
import Home from "./Home";
// import CreatePost from "../../components/CreatePost/CreatePostPopup";
// import Notifications from "./Notifications";
// import ProfileLink from "./ProfileLink";
// import Search from "./Search";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const SidebarItems = () => {
  const [user, setUser] = useState({});

  const handleonclick = () => {
    const user_id = localStorage.getItem("userId");
    console.log("HHHHHHHHHHH")
    console.log(user_id);
    localStorage.setItem("profileId", user_id);
    // setUser(user_id);
  };
  return (
    <>
      <Home className="border" />
      {/* <Search /> */}
      {/* <Notifications /> */}
      <CreatePost />
      <Profile />

      {/* <ProfileLink /> */}
    </>
  );
};

export default SidebarItems;
