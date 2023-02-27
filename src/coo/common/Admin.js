import React, { Component } from 'react';
import Logo from './logo2.png'
import Cards from './Cards'
import { Link,Route,Routes } from 'react-router-dom';
import { GrHomeRounded } from "react-icons/gr";
import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv
 } from "react-icons/md";
 import { BiWorld } from "react-icons/bi";
 import { AiOutlineTeam  } from "react-icons/ai";
 import {RiLiveLine } from "react-icons/ri";
 import { IoChatbubblesSharp,IoSettingsSharp,IoMdNotificationsOutline} from "react-icons/io5";
const Admin = () => {
    return (
      <div style={{ backgroundColor:'#2D4849' }}>
        <div className="logo" >  <img style={{ backgroundColor:'#2D4849' }} src={Logo} className="adminlogo" alt="no image" /> </div>
        
        <ul style={{ backgroundColor:'#2D4849',height:600 }} class="nav nav-pills flex-column">
  <li class="nav-item cctv">
  <Link to='/'><GrHomeRounded/> Dashboard</Link>
  </li>
  
  <li className='cctv'>
  <Link to={'/Booktt'}><MdLiveTv/> Courses</Link>
  </li>
  <li class="cctv">
  <Link to={'/Book'}><MdManageAccounts /> Manage Teachers</Link>
  </li>
  <li className='cctv'>
  <Link to={'/Book'}><AiOutlineTeam  /> Manage Students</Link>
  </li>
  <li className='cctv'>
  <Link to={'/room'}><RiLiveLine/> Live Classes</Link>
  </li>
  <li className='cctv'>
  <Link className='linkc' to={'/room'}><BiWorld/> news & notification</Link>
  </li>
  <li className='cctv'>
  <IoSettingsSharp /> Settings
  </li><Cards/>
</ul>
    
      </div>
        
    );
}

export default Admin;