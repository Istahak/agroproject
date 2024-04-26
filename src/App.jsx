import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage"; // Import SignUpPage component
import LoginPage from "./pages/LoginPage";
import AgriCalendarPage from "./pages/AgriCalendarPage";
import CropInfoPage from "./pages/CropInfoPage";
import FloatingChatButton from "./components/FloatingChatButton/FloatingChatButton"
import ChatWindow from "./components/ChatWindow/ChatWindow";

const App = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />{" "}
        {/* Add SignUpPage to routes */}
        <Route path="/login" element={<LoginPage />} />{" "}
        {/* Add LoginPage to routes */}
        <Route path="/agricalendar" element={<AgriCalendarPage />} />
        <Route path="/cropinfo" element={<CropInfoPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FloatingChatButton onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </BrowserRouter>
  );
};

export default App;
