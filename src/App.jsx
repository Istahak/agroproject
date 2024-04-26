import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'; // Import SignUpPage component
import LoginPage from './pages/LoginPage';
import TimeLine from './pages/TimeLine';
import WeatherPage from './pages/WeatherPage';
import { useStateContext } from './Context';

const App = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/k" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add SignUpPage to routes */}
        <Route path="/login" element={<LoginPage />} /> {/* Add LoginPage to routes */}
        <Route path ="/A" element={<TimeLine/>}/>
        <Route path ="/" element={<WeatherPage/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FloatingChatButton onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </BrowserRouter>
  );
};

export default App;
