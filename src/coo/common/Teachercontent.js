import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Ins from './ins.png';
import Stuu from'./stu.png';
import Stu from'./stuu.png';
import { BiMenuAltLeft  } from "react-icons/bi";
import { WiDirectionUpRight  } from "react-icons/wi";
import { BsPlayCircle} from "react-icons/bs";
import { RiArrowDropDownLine} from "react-icons/ri";
import { Button} from 'antd';
const TeContents= () => {
    return (
<div>
  <div style={{
           
           width:1200,
            backgroundColor:' #E6F0F0',
            height:70,
            margin:30
          }}>
<h2 style={{
           
             fontWeight:100,
              fontSize:38,
              paddingLeft:30,
              paddingTop:20
            }}> Well come Teacher</h2>
          <div
            style={{
              padding: 24,
              minHeight: 360,
        
              borderRadius:30,
            }}
          ></div>
           <div style={{
       width:280,
       height:100,
       marginTop:-360,
       
        }}>
          <Button style={{
           marginTop:70,
          backgroundColor:'#E6F0F0',
          borderRadius:5,
        
        }}>All Courses <RiArrowDropDownLine/></Button>
            
        </div>
        
        <Col style={{
             
         
          marginTop:260,
             borderRadius:30,
             marginLeft:310
           }}>
        <div
            
          ></div>
           <div style={{
       width:280,
       height:100,
       marginTop:-360,
        backgroundColor:'#DB2164'
        }}><p style={{
            paddingTop:23,
            marginLeft:90,
          
             }}>Total Revenue</p><h5  style={{
           marginTop:-8,
          paddingLeft:80
           }}>5000ETB </h5><p style={{
            marginTop:-10,
            marginLeft:90,
          
             }}>100 on this month</p>
        </div></Col>
        <Col style={{
             
         
             marginTop:260,
                borderRadius:30,
                marginLeft:620
              }}>
           <div
               
             ></div>
              <div style={{
          width:280,
          height:100,
          marginTop:-360,
           backgroundColor:'#5DB461',
           }}><p style={{
            paddingTop:23,
            marginLeft:90,
          
             }}>Total Enrollment's</p><h5  style={{
            marginTop:-10,
             paddingLeft:80
              }}>21,000</h5><p style={{
               marginTop:-10,
               marginLeft:90,
             
                }}>3000 on this month</p>
           </div></Col>
            <Col style={{
             
         
          marginTop:260,
             borderRadius:30,
             marginLeft:920
           }}>
        <div
            
          ></div>
           <div style={{
       width:280,
       height:100,
       marginTop:-360,
        backgroundColor:'#07B1C5',

        }}><p style={{
            paddingTop:25,
            marginLeft:90,
          
             }}>lnstructor rating</p><h5  style={{
          marginTop:-10,
          paddingLeft:80
           }}>4.5</h5><p style={{
            marginTop:-10,
            marginLeft:90,
          
             }}>300 on this month</p>
        </div></Col>
       </div>  
       </div> 
  );
}


  export default TeContents;