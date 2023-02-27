import React from "react";
import './Cards.css'
import { Card } from 'antd';
import { Col, Row } from 'antd';
import Image3 from "./img3.jpg";
import Image from './pic2.jpg';
import Fotter_Container from './Fotter_Container';
import Image2 from './Icon.png';
import Home from './Home'
function Cards(){
    const { Meta } = Card;
    return(
        <div className="card-container">
          <div className="">
          <img src={Image} className="imo"  alt="no image" />

            
          </div>
        
         <div >
            <p className="text">Home // <bdo>Courses Details</bdo></p>
            </div>
            <div className='im2'>
            <img src={Image2}  alt="no image" />
            </div>
               <p className="text2">Courses  <bdo >Details</bdo></p>
             
            <div className="card wir">
            <Row className="card-wir">
    <Col xs={23} sm={4} md={6} lg={8} xl={13}>
       
      <img src={Image3} className='imgsize' alt="no image" />
    <p className="txtimg">UI/UX</p>
     <p className="txt">What exactly is wireframing? a step by step guide.</p>
     <Row>
      <p className="belofi">Pamela Foster || <bdo className="belowimg">286 Enrolled Students</bdo><bdo className="belowimg">4.9</bdo><bdo className="belowimg">(5,764 Rating)</bdo> </p>
      
      </Row>
    </Col>
   
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        
        <p className="let">
            <p>Course Detail</p>
            <Row>
      <p className="in">Instructor <bdo className="bdoimg">Pamela Foster</bdo></p></Row>
     <Row> <p className="in">Duration <bdo className="bdoimg">08 hr 15 mins</bdo></p></Row>
    <Row>  <p className="in">Lectures <bdo className="bdoimg">29</bdo></p></Row>
     <Row> <p className="in">Level<bdo className="bdoimg">Secondary</bdo></p></Row>
     <Row> <p className="in">Language <bdo className="bdoimg">English</bdo></p></Row>
      <Row><p className="in">Certificate <bdo className="bdoimg">Yes</bdo></p></Row>
      <button className="btn">Enroll Now</button>
      </p>
    </Col>
  </Row>
  
            </div>
            
            <div className="contain-instruct">
            <Row >
                
                <button className="btnin">Description</button><button className="btnin">Instructors</button><button className="btnin">Reviews</button>
                
                </Row>
          
            <div className="header">
              <h4 className="h">Description:</h4>
             <p >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem 
              Ipsum passages desktop publishing software.
              
              <h4 className="h">Curriculum</h4>
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
            <div>

               

<Home/>
<Fotter_Container/>

</div>
      </div>
      
    )
}
export default Cards;