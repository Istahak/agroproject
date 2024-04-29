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
import GeminiPage from './pages/GeminiPage';
import Calender from './pages/Calender';

const App = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ll" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add SignUpPage to routes */}
        <Route path="/login" element={<LoginPage />} /> {/* Add LoginPage to routes */}
        <Route path ="/l" element={<TimeLine/>}/>
        <Route path ="/po" element={<WeatherPage/>}/>
        <Route path ="/s" element={<GeminiPage/>}/>
        <Route path ="/" element={<Calender/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FloatingChatButton onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </BrowserRouter>
  );
};

export default App;
