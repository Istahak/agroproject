import React, { useContext, useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'; 
import LoginPage from './pages/LoginPage';
import TimeLine from './pages/TimeLine';
import WeatherPage from './pages/WeatherPage';
import FloatingChatButton from './components/FloatingChatButton/FloatingChatButton';
import ChatWindow from './components/ChatWindow/ChatWindow';
import AgriCalendarPage from './pages/AgriCalendarPage';

const App = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path ="/A" element={<TimeLine/>}/>
        <Route path ="/B" element={<WeatherPage/>}/>
        <Route path ="/C" element={<AgriCalendarPage/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FloatingChatButton onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </BrowserRouter>
  );
};

export default App;
