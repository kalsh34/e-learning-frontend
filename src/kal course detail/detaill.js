import React, { useEffect, useState } from 'react';
import {Routes, Route}from'react-router-dom';
import { Link } from "react-router-dom";


import './detail.css';


 const Detail = () => {
    const [activea, setActivea] = useState(false);
    const handleClicka = () => {
      setActivea(!activea);
      setActiveb(false);
      setActive(false);
      
    };
    const [activeb, setActiveb] = useState(false);
    const handleClickb = () => {
      setActiveb(!activeb);
      setActivea(false);
      setActive(false);
    };
    const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
      setActivea(false);
      setActiveb(false);
    };
    useEffect(()=> {
        handleClicka()},
        []
    )

    return ( 
        
        <div className="all34">
         <div className='divide34'>
          <div className="allnav123">
         
      
                <button onClick={handleClicka}
        style={{ backgroundColor: activea ? "#FDB137" : "white" }} className='h534'>Description</button>
            
            
            <Link to={'/cardreview'}>
            <button onClick={handleClickb}
        style={{ backgroundColor: activeb ? "#FDB137" : "white" }} className='h535'>Instructors</button>
        </Link>
               {/* <Link to={'/sign_in'}>
                    <button className="btn" >Sign In</button>
                    </Link> */}
            
            <button onClick={handleClick}
        style={{ backgroundColor: active ? "#FDB137" : "white" }} className='h536'>Review</button>
            
          </div> 
          <div>
          <div className="detail34">
              <h4 className="h3412">Description:</h4>
             <p className="de34">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popul.33333333333
              
              arsed in the 1960 with release containing Lorem 
              Ipsum passages desktop publishing software.
              
              <h4 className="h34123">Curriculum:</h4>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem 
              Ipsum passages desktop publishing software.</p>

                 </div>
          </div>
          </div>
          <div className='aside34'>

                <h3 className="code34">course detail</h3>
            
                <div className='instruct341'>
                <p className='firint34'>Instructor</p>
                <p className='secint34'> Pamela Foster</p>
            </div>
                <div className='instruct342'>
                <p className='firint34'>Duration</p>
                <p className='secint34'> 08 hr 15 mins</p>
            </div>
                <div className='instruct343'>
                <p className='firint34'>Lectures</p>
                <p className='secint34'> 29</p>
                </div>
                <div className='instruct344'>
                <p className='firint34'>Level</p>
                <p className='secint34'> Secondary</p>
                </div>
                <div className='instruct345'>
                <p className='firint34'>Language</p>
                <p className='secint34'>English </p>
                </div>
                <div className='instruct346'>
                <p className='firint34'>Certificate</p>
                <p className='secint34'>Yes </p>
                </div>
                
                    <button className='en34'>Enrol now</button>
                    
                
          </div> 
        </div>
     );
}
 
export default Detail;