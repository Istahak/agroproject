import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'; // Import SignUpPage component
import LoginPage from './pages/LoginPage';
import TimeLine from './pages/TimeLine';
import WeatherPage from './pages/WeatherPage';
import { useStateContext } from './Context';
import GeminiPage from './pages/GeminiPage';
import Calender from './pages/Calender';

const App = () => {
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
    </BrowserRouter>
  );
};

export default App;
