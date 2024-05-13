import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import TimeLine from "./pages/TimeLine";
import WeatherPage from "./pages/WeatherPage";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import GeminiPage from "./pages/GeminiPage";
import CropInfoPage from "./pages/CropInfoPage";
import Chatting from "./pages/Chatting";
import CommentPage from "./pages/CommentPage";
import CreatePost from "./components/SideNavbar/CreatePost";
import TaskCalendarPage from "./pages/TaskCalendarPage";
import CropDetailsPage from "./pages/CropDetailsPage";
import ForgotPassword from "./pages/ForgotPassword";

import About from "./pages/About";
import { ThemeProvider } from "styled-components";
const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/as"
            element={
              <HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          {/* <Route path="/signup" element={<SignUpPage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/tl" element={<TimeLine />} />
        <Route path="/w" element={<WeatherPage />} />
        <Route path="/signup" element={<SignUpPage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/" element={<TimeLine />} />
        <Route path="/jyf" element={<WeatherPage />} />
        <Route path="/g" element={<GeminiPage />} />
        <Route path="/ch" element={<Chatting />} />
        <Route path="/com" element={<CommentPage />} />
        <Route path="/" element={<CreatePost />} />
        <Route path="/cropinfo" element={<CropInfoPage />} />
        <Route path="/t" element={<TaskCalendarPage />} />
        <Route path="/crop/:cropId" element={<CropDetailsPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FloatingChatButton onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </BrowserRouter>
        <Route path="/ch" element={<Chatting />} /> */}
          {/* <Route path="/com" element={<CommentPage />} /> */}
          {/* <Route path="/" element={<CreatePost />} /> */}
          <Route path="/cropinfo" element={<CropInfoPage />} />
          {/* <Route path="/t" element={<TaskCalendarPage />} /> */}
          <Route path="/crop/:cropId" element={<CropDetailsPage />} />
          <Route
            path="/"
            element={
              <HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/signup" element={<SignUpPage />} />{" "}
          <Route path="/login" element={<LoginPage />} />{" "}
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/gemini" element={<GeminiPage />} />
          <Route path="/expert-chat" element={<Chatting />} />
          <Route path="/comment/:postId" element={<CommentPage />} />
          {/* <Route path ="/" element={<CreatePost/>}/> */}
          <Route path="/cropinfo" element={<CropInfoPage />} />
          <Route path="/calender" element={<TaskCalendarPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        {/* <FloatingChatButton onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
