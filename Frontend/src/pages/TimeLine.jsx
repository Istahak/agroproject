import React from 'react'
import './TimeLine.css'
import Sidenav from '../components/SideNavbar/SideNavBar.jsx'
import Feed from '../components/TimeLineComp/TimeLineComp.jsx'

function TimeLine() {
  return (
    <div className="TimeLine">
        <div className='navBar'>
            <Sidenav/>
        </div>
        <div className='timeLine'>
            <Feed/>
            <Feed/>
            <Feed/>
        </div>
    </div>
  )
}

export default TimeLine