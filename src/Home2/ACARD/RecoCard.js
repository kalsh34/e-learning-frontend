import React from 'react';
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

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y ]);

const data= [
    {
        id: 1,
        Image:Img1,
        title:'Section 5: What exactly is wireframing?a step by step guide',
        // description:'What exactly is wireframing?a step by step guide.',
        instructor:'lorem ipsum',
    },
    {
        id: 2,
        Image:Img2,
        title:'Section 5: What exactly is wireframing?a step by step guide',
        // description:'What exactly is wireframing?a step by step guide.',
        instructor:'lorem ipsum',
    },
    {
        id: 3,
        Image:Img1,
        title:'Section 5: What exactly is wireframing?a step by step guide',
        // description:'What exactly is wireframing?a step by step guide.',
        instructor:'lorem ipsum',
    },
    {
        id: 4,
        Image:Img2,
        title:'Section 5: What exactly is wireframing?a step by step guide',
        // description:'What exactly is wireframing?a step by step guide.',
        instructor:'lorem ipsum',
    },
]

const AntiCard = () => {
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

        {data.map( imou => (
        <SwiperSlide className='AntiSlide'>
        <div className='Anti_content'>
            <div className='AntiImg'>
                <img src={imou.Image}  alt='' className='Imini'/>
            </div>
                <h1 className='titles'>{imou.title}</h1>
                {/* <h1 className='descriptions'>{imou.description}</h1> */}
                <h1 className='instructors'>{imou.instructor}</h1>
            </div>

            {/* <div className='Allbook'>
      <div className='circle'>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="orange" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
    </div>

    <div className='bok'>
                {/* bookmark 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
      </div>
      </div> */}

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

