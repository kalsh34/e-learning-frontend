import React, { useEffect } from 'react';
import Img1 from '../assets/software.jpg';
import Img2 from '../assets/web.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';

import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y ]);

const AntiCard = () => {

const navigate=useNavigate()
  const handleclick=async(id)=>{
    try{
      const response= await axios.get(`http://192.168.0.130:5000/courses/${id}`)
      navigate(`/page/${id}`)
    }catch(error){
      console.log(error)
    }
  }
    const [course, setcourse] = useState([]);
    useEffect(() => {
    async  function fetchdata() {
        const response=await axios.get('http://192.168.0.130:5000/courses')
        const course=response.data
        console.log(course)
        setcourse(course)
        
      }fetchdata()

    }, []);
  return (
    <div className='AntiApp'>
         <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      navigation= {{
         nextEl: ".button-next",
         prevEl: ".button-prev",
      }}
       modules={[Navigation]}
    
       onSlideChange={() => console.log('slide change')}
    >

        {course.map( imou => (
        <SwiperSlide className='AntiSlide'>
        <div className='Anti_content'onClick={()=>handleclick(imou._id)}>
            <div className='AntiImg'>
                <img src={"http://192.168.0.130:5000"+imou.image}  alt='' className='Imini'/>
            </div>
                <h1 className='titles'>{imou.courseName}</h1>
                <h1 className='descriptions'>{imou.description.slice(0,60)} </h1>
                <h1 className='instructors'>{imou.instractor?.firstName} {imou.instractor?.lastName}</h1>
            </div>

<div className='Allkib'>
                <div className='kib'>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="orange" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
    </div>
    <div className='mlkt'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
      </div>
                </div>
        </SwiperSlide>

))}
    </Swiper>

    <div className='button-prev'>
                <IoIosArrowDropleftCircle size='3rem'/>
            </div>
        <div className='button-next'>
            <IoIosArrowDroprightCircle  size='3rem'/>
        </div>
    </div>
  )
}

export default AntiCard;

