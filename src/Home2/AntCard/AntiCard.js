import React from 'react';
import Imgg from '../assets/web.png';
// import Video from '../../assets/v v.mp4';+
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';      
import { useState,useEffect } from 'react';
SwiperCore.use([
    Navigation, Pagination, Scrollbar, A11y]);
const Card = () => {
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

        <div className='Appl'>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide",
                }}
                modules={[Navigation]}
                //    pagination={{ clickable: true }}
                //    scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   className='mySwiper'
            >



                {course.map(user => (
                    <SwiperSlide key={user.id} className="slide">
                        <div className='slide_content' onClick={()=>handleclick(user._id)}>
                            <div className='image'>
                                <img src={"http://192.168.0.130:5000"+user.image} alt='' className='photo' />
                            </div>

                            <h1 className='title'>{user.courseName}</h1>
                            <h1 className='desc'>{user.description.slice(0,40)}</h1>
                            <h1 className='seat'>{user.category?.name}</h1>
                            <h1 className='instructor'>{user.instractor?.firstName}</h1>

                            <div className='svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </div>


                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            <div className='button-prev-slide'>
                <IoIosArrowDropleftCircle size='3rem' />
            </div>
            <div className='button-next-slide'>
                <IoIosArrowDroprightCircle size='3rem' />
            </div>
        </div>
    )
}

export default Card;
