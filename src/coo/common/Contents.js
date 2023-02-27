import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Ins from './ins.png';
import Stuu from'./stu.png';
import Stu from'./stuu.png';
import { BiMenuAltLeft  } from "react-icons/bi";
import { WiDirectionUpRight  } from "react-icons/wi";
import { BsPlayCircle} from "react-icons/bs";
const Contents= () => {
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
            }}> Well come Dawit</h2>
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
        backgroundColor:'#FB9107'
        }}><h5  style={{
          paddingTop:20,
          paddingLeft:90
           }}>45K+ </h5><p style={{
            marginTop:-10,
            marginLeft:95,
          
             }}>All Courses</p>
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
        }}><h5  style={{
          paddingTop:20,
          paddingLeft:110
           }}>60K+ </h5><p style={{
            marginTop:-10,
            marginLeft:90,
          
             }}>Enrolled Students</p>
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
           }}><h5  style={{
             paddingTop:20,
             paddingLeft:90
              }}>100K+ </h5><p style={{
               marginTop:-10,
               marginLeft:100,
             
                }}>Teachers</p>
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

        }}><h5  style={{
          paddingTop:20,
          paddingLeft:110
           }}>100 </h5><p style={{
            marginTop:-10,
            marginLeft:90,
          
             }}>Pending requests</p>
        </div></Col>
       </div>  
       </div> 
  );
}


  export default Contents;