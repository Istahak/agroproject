import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import CreatePostLogo from "@mui/icons-material/AddCircleOutline";
import usePreviewImg from "../../Hooks/usePreviewImg";
import useShowToast from "../../Hooks/useShowToast";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caption, setCaption] = useState();
  const textareaRef = useRef(null);
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const showToast = useShowToast();
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);
  //   isOpen
  const handlePost = () =>{
    console.log(typeof selectedFile);
  }
  return (
    <>
      <Tooltip
        hasArrow
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
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
            bg: "aliceblue", // Background color on hover
            color: "black", // Text color on hover
            fontSize: "1.01rem", // Font size on hover
          }}
          onClick={onOpen}
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          bg={"black"}
          opacity="10%"
          border={"1px solid gray"}
          w="30%" // Set the width of the modal content to 60% of its container
          maxW="90%" // Set the maximum width of the modal content
          p={{ base: "2", md: "6" }} // Set padding based on screen size
          ml="30%"
          color="white"
          textAlign="center"
        >
          <ModalHeader fontSize="1.5rem" mb="5%">
            Create Post
          </ModalHeader>
          <ModalCloseButton position="absolute" right="8px" top="8px" />
          <ModalBody pb={6}>
            <Textarea
              ref={textareaRef}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Post caption..."
              w="100%"
              h="auto"
              minH="100px" // Set a minimum height to prevent it from collapsing
              resize="vertical"
            />

            <Input
              type="file"
              hidden
              ref={imageRef}
              onChange={handleImageChange}
            />

            <BsFillImageFill
              onClick={() => imageRef.current.click()}
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              size={16}
            />
            {selectedFile && (
              <Flex
                mt={5}
                w={"full"}
                position={"relative"}
                justifyContent={"center"}
              >
                <Image src={selectedFile} alt="Selected img" />
                <CloseButton
                  position={"absolute"}
                  top={2}
                  right={2}
                  onClick={() => {
                    setSelectedFile(null);
                  }}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              mr={40}
              mb={10}
              _hover={{ bg: "blue.500" }}
              onClick={onClose}
            >
              Close
            </Button>
            <Button colorScheme="blue" mr={10} mb={10} onClick={handlePost}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;
