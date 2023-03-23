import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const HEADER = () => {
  const [user, setUser] = useState([]);
    useEffect(() => {
    async  function fetchdata() {
        const response=await axios.get('/users/showCurrentUser')
        const course=response.data
        console.log(course)
        setUser(course.user)
        
      }fetchdata()

    }, []);
  return (
    <div className='hehe'>
      <h1 className="our" key={user.userId}
      >Welcome back <bdo className="bdo">{user.firstName},</bdo> ready or your next lesson? </h1>

    <div className='VVAll'>
      {/* <button className='vvbtn1'>
        <p>View Watch History</p>
      </button> */}
      <div className='buttonAB'>
        {/* arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
      </div>
      </div>
    </div>
  )
}

export default HEADER;
