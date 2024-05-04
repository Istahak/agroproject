import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import AgroLogo from '../../assets/images/logo.png';
import SidebarItems from "./SidebarItems";
import './SideNavBar.css';

const SideNavBar = () => {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
      className="nav-bar"
    >
      <Flex direction={"column"} gap={10} w='full' height={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
          <img src={AgroLogo} alt="NO LOGO!" className="logo" />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideNavBar;
