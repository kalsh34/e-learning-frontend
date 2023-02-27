import React from 'react';
import { Card } from 'antd';
import { Avatar, List } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from './logo2.png';
import Ux from './Ux.png'
import Vec from './Vector1.png'
import { IoIosNotificationsOutline} from "react-icons/io";
import { Link,Route,Routes } from 'react-router-dom';
import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv
 } from "react-icons/md";
 import { IoChatbubblesSharp,IoSettingsSharp,IoMdNotificationsOutline} from "react-icons/io5";
 import { Layout, Menu, theme } from 'antd';
 import { BsThreeDotsVertical} from "react-icons/bs";
 import { Col, Row } from 'antd';
 import { Input, Space } from 'antd';
 import { GoBook } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";

import { RiArrowDropDownLine,RiQuestionAnswerLine,RiLogoutCircleRLine} from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
 import {RiLiveLine } from "react-icons/ri";
 import { BiWorld } from "react-icons/bi";
 import { AiOutlineTeam  } from "react-icons/ai";
 import Tec from './3.png';
import { unhover } from '@testing-library/user-event/dist/hover';
 const { Meta } = Card;
 const { Header, Content, Footer, Sider } = Layout;
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
    {
        avatar:<Avatar>A</Avatar>,
        title: 'Abdela',
        description:'5 Design Courses',
        
      },
      
  ];
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
   
const Dashbordcourse= () => {
  const navigate=useNavigate();
  function handleclick(){
    navigate('/course')
  }
    return (
        <div className="site-card-border-less-wrapper">
            <Layout>
            <Sider style={{  backgroundColor:'#2D4849', height:1270, }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" style={{marginTop:10,backgroundColor:'#2D4849' }}>  <img style={{ backgroundColor:'#2D4849',height:36 }} src={Logo} className="adminlogo" alt="no image" /> </div>
        
        <Menu style={{backgroundColor:'#2D4849',height:600,color:'white' }}>
         <Menu.Item hoverable> <Link to='/dashbord'><GrHomeRounded/> Dashboard</Link></Menu.Item>
         <Menu.Item hoverable><Link to={'/course'}><MdLiveTv/> Courses</Link></Menu.Item>
         <Menu.Item hoverable><Link to={'/manageteacher'}><MdManageAccounts /> Manage Teachers</Link></Menu.Item>
         <Menu.Item hoverable><Link to={'/managestu'}><AiOutlineTeam  /> Manage Students</Link></Menu.Item>
         <Menu.Item hoverable><Link to={'/room'}><RiLiveLine/> Live Classes</Link></Menu.Item>
         <Menu.Item hoverable ><Link to={'/News'}><BiWorld/> news & notification</Link></Menu.Item>
         <Menu.Item  hoverable ><Link to={'/setting'}><IoSettingsSharp /> Settings</Link></Menu.Item>
      </Menu>
        </Sider>
      <Layout>
      
        
          <Row style={{ backgroundColor:'#2D4849',}}>
      <Col span={8} xs={{ order: 4 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 2 }}>
        <Avatar  style={{ marginLeft:10,marginTop:-50,backgroundColor:' #FEEAA5' }}>Y</Avatar><p style={{ color:'white',marginTop:-40,marginLeft:50}}>profile<BsThreeDotsVertical/></p>
     </Col>
      <Col span={16} xs={{ order: 2}} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 1 }}>
      <Search  placeholder=" search " onSearch={onSearch} style={{ width: 300,marginLeft:372,marginTop:-32,backgroundColor:'white',height:50,borderRadius:20}} />
      </Col>
      <Col>
      <IoIosNotificationsOutline style={{ backgroundColor:'#BFBFBF' ,marginLeft:780,marginTop:40,width:42,height:22,borderRadius:200}}/>
      </Col>
    </Row>
    <Content
          style={{
            margin: '24px 16px 0',
            backgroundColor:'white',
          }}
        >
          <div style={{
            margin:22,
            

          }}>
          <Link  hoverable
    style={{ color:'black',
    
     
     }}to={'/course'}>Trending course</Link><Link 
     style={{ color:'black',
     marginLeft:15
     
      
      }}to={'/Newcourse'}> New Courses</Link></div>
          <div className='divshow'><h6 className='hshow' >Showing 1 to 10 of 36 entries<button style={{
            marginLeft:410,
            backgroundColor:'white',
          }}>sort By... <RiArrowDropDownLine/></button></h6></div>
            <Row  style={{
            margin:22,
            

          }}>
            <Col xs={23} sm={16} md={12} lg={8} xl={5}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="Course title" description="johson" />
  </Card>
  </Col>
     <Col xs={23} sm={16} md={12} lg={8} xl={5}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="Ux/Ui" description="Abd" />
  </Card>
  </Col>
   <Col xs={23} sm={16} md={12} lg={8} xl={6}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="Markating" description="Sofie" />
  </Card>
  </Col>
  </Row>

  <Row style={{ margin:22 }}>
               
   <Col xs={23} sm={16} md={12} lg={8} xl={5}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="Maths" description="Abebe" />
  </Card>
  </Col>

   <Col xs={23} sm={16} md={12} lg={8} xl={5}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="WEb" description="Alemu" />
  </Card>
  </Col>
  <Col>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="Ux/Ui" description="abc" />
  </Card>
  </Col>
  </Row>

  <Row  style={{margin:22 }}>
             <Col xs={23} sm={16} md={12} lg={8} xl={5}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="Maths" description="cdb" />
  </Card>
  </Col>
  <Col xs={23} sm={16} md={12} lg={8} xl={5}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="web" description="dox" />
  </Card>
  </Col>
  <Col>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Tec}/>}
  >
    <Meta title="Ux" description="Maths" />
  </Card>
  </Col>

  <Col xs={23} sm={16} md={12} lg={8} xl={6}  style={{
         
          
          marginTop:-670,
          marginLeft:40,
        
        }}>
  <Card 
        style={{
         
          borderRadius:25,
          marginTop:59,
        
        }}
         title="Top lnstructors" bordered={false} >
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
        
        />     <p style={{
          float:'right',
          marginTop:-45,
          
        color:'black',
          borderRadius:40,
          width:16,
          height:33,
          fontSize:11
        }}>30+ Courses</p>
      </List.Item>
    )}
  />
        </Card></Col>

        <Col xs={23} sm={16} md={12} lg={8} xl={6}  style={{
         
          
          marginTop:-180,
          marginLeft:-320,
        
        }}>
  <Card 
        style={{
         
          borderRadius:25,
          marginTop:65,
        
        }}
         title="Top performing Courses" bordered={false} >
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
        
        />     <p style={{
          float:'right',
          marginTop:-45,
          
        color:'black',
          borderRadius:40,
          width:16,
          height:33,
          fontSize:11
        }}>13000 Enrolled students</p>
      </List.Item>
    )}
  />
        </Card></Col>
  </Row>
                </Content>
    
                <Footer
          style={{
            textAlign: 'center',
            backgroundColor:'#2D4849',
            color:'white'
          }}
        >
          E-learning ©2020 
        </Footer>
        </Layout>
        </Layout>
  </div>
    );
}

export default Dashbordcourse;