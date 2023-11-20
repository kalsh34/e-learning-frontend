import axios from "axios";
import { useNavigate } from "react-router-dom";

import React, { useState } from 'react';


const Card = ({ data = null }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://192.168.0.130:5000/courses/${id}`);
      navigate(`/page/${id}`);
      console.log('photo');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    

    const isLoggedIn = localStorage.getItem('isLogedIn') === 'true' ? false : true;
    if (isLoggedIn) {
      navigate('/sign_in');
    }
  };

  const sign = () => {
    const isLoggedIn = localStorage.getItem('isLogedIn') === 'true' ? true : false;
    if (isLoggedIn) {
      navigate('/page');
    } else {
      navigate('/sign_in');
    }
  };

  console.log(data.image);
  return (
    <div className="card" onClick={() => handleClick(data._id)}>
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <img className="imgh" src={'http://192.168.0.130:5000' + data.image} alt="" />
          <div className="card_text">
            <p className="inst">{data.courseName}</p>
            {/* <p className="inst1">{data.description.slice(0, 30)}</p> */}
            <button style={{
                     display: 'flex',
                     justifyContent: 'center', 
                     alignItems: 'center',
                     marginLeft: '3rem',
                    marginTop: '15rem',
                    width: '150px',
                    height: '35px', 
                    backgroundColor: ' #FDB137', 
                    border: 'none',
                    transition: 'background-color 0.3s', 
                    borderRadius:'2.5rem',
                    
                }}
                
              className="subscriptionButton">Enrol</button>
          </div>
        </>
      )}
    </div>
  );
};

 
export default Card;