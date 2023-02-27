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

const info= [
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


const SaveCard = () => {
  return (
    <div className='SApp'>
        <Swiper  
      spaceBetween={30}
      slidesPerView={3}
      navigation= {{
         nextEl: ".button-nextt",
         prevEl: ".button-prevv",
      }}
       modules={[Navigation]}
    
       onSlideChange={() => console.log('slide change')}
    >

        {info.map( saveu => (
        <SwiperSlide className='SavSlide'>
        <div className='Anti_content'>
            <div className='AntiImg'>
                <img src={saveu.Image}  alt='' className='lyla'/>
            </div>
                <h1 className='titleh'>{saveu.title}</h1>
                {/* <h1 className='descriptionh'>{saveu.description}</h1> */}
                <h1 className='instructorh'>{saveu.instructor}</h1>
            </div>

                <div className='Allkib'>
                <div className='kib'>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="orange" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
    </div>
    <div className='mlkt'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
</svg>
      </div>
                </div>
        </SwiperSlide>

))}
    </Swiper>

    <div className='button-prevv'>
                <IoIosArrowDropleftCircle size='3rem'/>
            </div>
        <div className='button-nextt'>
            <IoIosArrowDroprightCircle  size='3rem'/>
        </div>
    </div>
  )
}

export default SaveCard;


