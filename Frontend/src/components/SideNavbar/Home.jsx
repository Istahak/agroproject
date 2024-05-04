import React from "react";
import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
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
        to={"/"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"} // Align items and content to center
        gap={4}
        borderRadius={6}
        p={12}
		pr = "7rem"
        w={{ base: 10, md: "full" }}
        _hover={{
			// textDecoration: "none",
			bg: "aliceblue", // Background color on hover
			color: "black", // Text color on hover
			fontSize: "1.01rem", // Font size on hover
		  }}
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }}>Home</Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
