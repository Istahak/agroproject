import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import Main from '../components/Chat/Main'
import ContextProvider from "../Context/Context";
import Navbar from '../components/Navbar/Navbar';

function GeminiPage() {
  return (
    <div className='overflow-hidden'>
      {/* <SideBar /> */}
      <Navbar></Navbar>
      <Main></Main>
      {/* Other components */}
    </div>
  )
}

export default GeminiPage