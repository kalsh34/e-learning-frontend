import React from 'react';
import { Card, Col, Row } from 'antd';
import { Button} from 'antd';
import { BsThreeDotsVertical} from "react-icons/bs";
import { Avatar, List } from 'antd';
import { RiArrowDropDownLine} from "react-icons/ri";

import Charts from './Charts';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    avatar:<Avatar>U</Avatar>,
    title: 'Ui/Ux Design',
    description:'30+ Courses',
    
  },
  {
    avatar:<Avatar>M</Avatar>,
    title: 'Marketing',
    description:'25+ Courses',
    
  },
  {
    avatar:<Avatar>W</Avatar>,
    title: 'Web Development',
    description:'40+ courses',
    
  },
  {
    avatar:<Avatar>M</Avatar>,
    title: 'Mathematics',
    description:'50+ courses',
  
  },
];

const items = [
  {
    avatar:<Avatar>A</Avatar>,
    title: 'Abdela',
    description:'5 Design Courses',
    
  },
  {
    avatar:<Avatar>N</Avatar>,
    title: 'Nahar',
    description:'6 Web Courses',
    
  },
  {
    avatar:<Avatar>A</Avatar>,
    title: 'Ashik',
    description:'4 Designcourses',
    
  },
  {
    avatar:<Avatar>H</Avatar>,
    title: 'Hossien',
    description:' 6 Mathematics courses',
  
  },
];

const Cards = () =>{
  const navigate=useNavigate();
function handleclick(){
  navigate('/course')
}

return (
 
  
  <div className="site-card-wrapper" style={{ backgroundColor:'white', }}>
    <Row gutter={16}>
    <Col xs={23} sm={16} md={12} lg={8} xl={9}>
        <Card 
        style={{
         
          borderRadius:25,
          marginTop:65,
          marginLeft:30,
        
        }}
         title="Popular Courses" bordered={false} ><Button style={{
          float:'right',
          marginTop:-70,
          borderRadius:15,
        
        }}>All Courses <RiArrowDropDownLine/></Button>
        <List  style={{
         
         backgroundColor:'#e6f0f0',
         borderRadius:15,
       
       }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={item.avatar}
          title={item.title}
          description={item.description}
        
        />    <Button onClick={handleclick}
        style={{
          float:'right',
          marginTop:-45,
          borderRadius:15,
          marginRight:10,
        }}>View Courses</Button><Button style={{
          float:'right',
          marginTop:-45,
          marginRight:-23,
          borderRadius:20,
          width:16,
          height:33,
        }}><BsThreeDotsVertical style={{
          marginLeft:-8,
          borderRadius:12}}/></Button>
      </List.Item>
    )}
  />
        </Card>
      </Col>





      <Col xs={10
      } sm={16} md={12} lg={8} xl={7}> 
      <Card 
      
        style={{
         
          borderRadius:25,
          marginTop:65,
        
        }} title="Best Instructors" bordered={false}><Button style={{
          float:'right',
          marginTop:-70,
          borderRadius:15,
        
        }}>See All <RiArrowDropDownLine/></Button>
        <List  style={{
         
         backgroundColor:'#e6f0f0',
         borderRadius:15,
       
       }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={item.avatar}
          title={item.title}
          description={item.description}
        
        />    <Button style={{
          float:'right',
          marginTop:-45,
        
          borderRadius:20,
          width:16,
          height:33,
        }}><BsThreeDotsVertical style={{
          marginLeft:-8,}}/></Button>
      </List.Item>
    )}
  />
        </Card>
      </Col>

      <Col xs={23} sm={16} md={12} lg={8} xl={7}>




     <Card 
        style={{
         
          borderRadius:25,
          marginTop:65,
        
        }}
         title="New Joined Studenets" bordered={false} ><Button style={{
          float:'right',
          marginTop:-70,
          borderRadius:15,
        
        }}>See All <RiArrowDropDownLine/></Button>
        <List  style={{
         
         backgroundColor:'#e6f0f0',
         borderRadius:15,
       
       }}
    itemLayout="horizontal"
    dataSource={items}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={item.avatar}
          title={item.title}
          description={item.description}
        
        />     <Button style={{
          float:'right',
          marginTop:-45,
        
          borderRadius:40,
          width:16,
          height:33,
        }}><BsThreeDotsVertical style={{
          marginLeft:-8,}}/></Button>
      </List.Item>
    )}
  />
        </Card>
      </Col>
    </Row>
  </div>
);
      };
export default Cards;