import React from "react";
import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link as RouterLink } from "react-router-dom";

import { useState,useEffect } from "react";

const Profile = () => {

  const [user, setUser] = useState({});

  const handleonclick = () => {
    const user_id = localStorage.getItem("userId");
    // console.log("HHHHHHHHHHH")
    // console.log(user_id);
    localStorage.setItem("profileId", user_id);
    // setUser(user_id);
  };


  return (
    <Tooltip
      hasArrow
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        as={RouterLink}
        to={"/profile"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"} // Align items and content to center
        gap={4}
        borderRadius={6}
        p={12}
        pr="7rem"
        w={{ base: 10, md: "full" }}
        _hover={{
          // textDecoration: "none",
          bg: "alicblue", // Background color on hover
          color: "black", // Text color on hover
          fontSize: "1.01rem", // Font size on hover
        }}
      >
        {/* <AiOutlineUser size={25} />
         */}
        <AccountBoxIcon />
        <Box display={{ base: "none", md: "block" }} onClick={handleonclick}>Profile</Box>
      </Link>
    </Tooltip>
  );
};

export default Profile;
