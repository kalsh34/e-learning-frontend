import React from 'react';
import './Slider.css';
//import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import {FaArrowCircleRight} from "react-icons/fa";
import {FaArrowCircleLeft} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import Daveheader from './davehader';

const ReactCardSlider =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return(
        
        <div id="main-slider-container">
            <FaArrowCircleLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
             <Daveheader/>
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description} <t><FaFacebookSquare className='fb1'/> <FaInstagramSquare className='fb2' /> <FaLinkedin className='fb3'/></t></p>
                                  </div>
                        )
                    })
                }
            </div>
             <FaArrowCircleRight size={40} className="slider-icon rightt" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;