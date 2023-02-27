
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Imageon from'./tec.jpg';
import  {FaFacebookSquare} from 'react-icons/fa' ;
import {FaInstagramSquare} from 'react-icons/fa' ;
 import {FaLinkedin} from "react-icons/fa";
 import img3 from './img3.jpg';
 import img4 from './img4.jpg';


import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <><h1 className="our">Related courses</h1>

   
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img4} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
             Hirut Hailu
 
<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={Imageon} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Kristin Watson<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img4} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Hirut Hailu<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img4} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Hirut Hailu<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={Imageon} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Kristin Watson<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img3} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Kristin Watson<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={Imageon} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Kristin Watson<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img3} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Kristin Watson<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img4} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Hirut Hailu<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img4} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Hirut Hailu<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img3} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Kristin Watson<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
          <SwiperSlide> <div className="title" data-swiper-parallax="-300">
        <img src={img4} className="imageon" alt="no image" />
          </div>
         
          <div className="text" >
            <p>
            Hirut Hailu<pre>UI/UX Designer</pre>
            <i><FaFacebookSquare /></i> <FaInstagramSquare /> <FaLinkedin  />
            </p>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}
