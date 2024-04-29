import React from 'react'
import './SideNavBar.css'
import icon from "../../assets/images/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function SideNavBar() {
  return (
    <div className='sideBar'>
        <img className='logo' src={icon} alt="Not Available." />
        <div className='sideButtons'>
            <button className='sideButton'>
                <HomeIcon/>
                <span>Home</span>
            </button>
            <button className='sideButton'>
                <AddCircleOutlineIcon/>
                <span>Create Post</span>
            </button>
            <button className='sideButton'>
                <NotificationsIcon/>
                <span>Notifications</span>
            </button>
            <button className='sideButton'>
                <AccountCircleIcon/>
                <span>Profile</span>
            </button>
            <button className='sideButton'>
                <HelpIcon/>
                <span>Help</span>
            </button>
        </div>
        <div className="sideNavMore">
            <button className='sideButton'>
                <MoreVertIcon/>
                <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default SideNavBar