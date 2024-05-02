import React, { useContext, useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'; 
import LoginPage from './pages/LoginPage';
import TimeLine from './pages/TimeLine';
import WeatherPage from './pages/WeatherPage';
import { useStateContext } from './Context';
import FloatingChatButton from './components/FloatingChatButton/FloatingChatButton'
import ChatWindow from './components/ChatWindow/ChatWindow'
import GeminiPage from './pages/GeminiPage'
import CropInfoPage from './pages/CropInfoPage';
import Chatting from './pages/Chatting';

const App = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add SignUpPage to routes */}
        <Route path="/login" element={<LoginPage />} /> {/* Add LoginPage to routes */}
        <Route path ="/A" element={<TimeLine/>}/>
        <Route path ="/k" element={<WeatherPage/>}/>
        <Route path ="/g" element={<GeminiPage/>}/>
        <Route path ="/ch" element={<Chatting/>}/>
        <Route path="/cropinfo" element={<CropInfoPage/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FloatingChatButton onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </BrowserRouter>
  );
};

export default App;
