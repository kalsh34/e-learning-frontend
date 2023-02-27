import React from 'react';
import Imgg from '../assets/web.png';
// import Video from '../../assets/v v.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';

import { Navigation } from 'swiper';
import 'swiper/css/navigation';

// import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from 'react-icons/hi';

import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
//import { HiPlay } from 'react-icons/hi';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        id: 1,
        Image: Imgg,
        title: 'lorem ipsum',
        description: '09.Lorem ipsum dolor sit amet consectetur.',
        time: '24h 36m left',
        instructor: 'lorem ipsum',
    },
    {
        id: 2,
        Image: Imgg,
        //Video: Video,
        title: 'lorem ipsum',
        description: '09.Lorem ipsum dolor sit amet consectetur.',
        time: '24h 36m left',
        instructor: 'lorem ipsum',
    },
    {
        id: 3,
        Image: Imgg,
        title: 'lorem ipsum',
        description: '09.Lorem ipsum dolor sit amet consectetur.',
        time: '24h 36m left',
        instructor: 'lorem ipsum',
    },
    {
        id: 4,
        Image: Imgg,
        title: 'lorem ipsum',
        description: '09.Lorem ipsum dolor sit amet consectetur.',
        time: '24h 36m left',
        instructor: 'lorem ipsum',
    },
    {
        id: 4,
        Image: Imgg,
        title: 'lorem ipsum',
        description: '09.Lorem ipsum dolor sit amet consectetur.',
        time: '24h 36m left',
        instructor: 'lorem ipsum',
    },
    {
        id: 4,
        Image: Imgg,
        title: 'lorem ipsum',
        description: '09.Lorem ipsum dolor sit amet consectetur.',
        time: '24h 36m left',
        instructor: 'lorem ipsum',
    },
    {
        id: 4,
        Image: Imgg,
        title: 'lorem ipsum',
        description: '09.Lorem ipsum dolor sit amet consectetur.',
        time: '24h 36m left',
        instructor: 'lorem ipsum',
    },
]

const Card = () => {
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



                {data.map(user => (
                    <SwiperSlide key={user.id} className="slide">
                        <div className='slide_content'>
                            <div className='image'>
                                <img src={user.Image} alt='' className='photo' />
                            </div>

                            <h1 className='title'>{user.title}</h1>
                            <h1 className='desc'>{user.description}</h1>
                            <h1 className='timee'>{user.time}</h1>
                            <h1 className='instructor'>{user.instructor}</h1>

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
