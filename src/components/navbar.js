
import { ReactComponent as Logo } from "../svg/logo.svg";
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import '../styles/navbar.css';
import { Link, useLocation } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import Appabout from "../about us/App";
import Details from "./details";
import AppContact from "../contact us/App";
import { useEffect } from "react";
// import React, {  useState } from 'react';
import { useWorkoutContext } from "../hooks/useworkoutcontext";
import { WorkoutContext } from "../context/workoutcontext";
import{BsBell} from'react-icons/bs';
import Profile from'../user/profile.png';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
const logout=()=>{
  localStorage.setItem("isLogedIn","false")
  navigate('/')
 
}
const {state,dispatch}=useWorkoutContext()
// const localStorages=Cookies.get('user');
const list=()=>{
  const isLogedIn =   localStorage.getItem("isLogedIn") === "true" ? true : false;
console.log("this is the token",document,"cookie end")
if(isLogedIn){
  return[
    
    <nav ref={navRef}>

    <NavLink to="/home2" activeClassName="active">Home</NavLink> 
    <NavLink to="/about" activeClassName="active" >About</NavLink>
    <NavLink to="/contact" activeClassName="active" >Contact Us</NavLink>
    <NavLink to="/ contactus" activeClassName="active" >Resources</NavLink>
    




</nav> ,
    <div className="">
                
            
                <img src={Profile} alt="Avatar" className='avatar' />
                <button   className='btn41' type="" onClick={logout}>Logout</button>
              </div>
               
  ]
}else{
  return[
    <nav ref={navRef}>

          <NavLink to="/" activeClassName="active">Home</NavLink> 
          <NavLink to="/about" activeClassName="active" >About</NavLink>
          <NavLink to="/contact" activeClassName="active" >Contact Us</NavLink>
          <NavLink to="/ contactus" activeClassName="active" >Resources</NavLink>
          
     

    
      
      </nav>,
 
    <div className="button">
    <Link to={'/sign'}>
<button className="btn" >  Sign Up</button>

</Link>
<Link to={'/sign_in'}>
<button className="btn" >Sign In</button>

</Link>     

</div>
        
     
   
  ]
}
}
    // const onClick =({ key }) => {
    //    };
   const {pathname} =  useLocation();
   
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    }
    
    // const [activeb, setActiveb] = useState(false);
    // const handleClickb = () => {
    //   setActiveb(!activeb);
     
    //   setActive(false);
    // };
    // const [active, setActive] = useState(false);
    // const handleClick = () => {
    //   setActive(!active);
    //   setActiveb(false);
    // };
    
   
  return (
        <div className="navbar">
            <header className="headermain">
                <Logo />
                {pathname != "/allcourses" &&  <Details/>}
         
                {/* <h3 onClick={(e) => e.preventDefault()}>| <HiChevronDoubleDown/> Category</h3> */}
     {/* <Dropdown
    menu={{
      items,
      
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="antcat">
       Category
        <DownOutlined />
      </Space>
    </a>
  </Dropdown> */}
      
                {/* {
                  localStorages?(
                    <div className="profile">
                    <h2>My Class</h2>
                   <BsBell/>
                    <img src={Profile} alt="Avatar" className='avatar' />
                  </div>
                  ):(
                  
    <div className="button">
    <Link to={'/sign'}>
<button className="btn" >  Sign Up</button>

</Link>
<Link to={'/sign_in'}>
<button className="btn" >Sign In</button>

</Link>     

</div>
                  )
                } */}
             {list()}
              
            </header>
        </div>
    );
}

export default Navbar;