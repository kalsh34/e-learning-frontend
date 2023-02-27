import React from 'react';
import { Card } from 'antd';
import { Avatar, List } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from './logo2.png';

import { IoIosNotificationsOutline} from "react-icons/io";
import { Link,Route,Routes } from 'react-router-dom';
import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv,MdClear
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
import { width } from '@mui/system';
import { FiEdit2,FiFilter} from "react-icons/fi";
import { FcFilledFilter } from "react-icons/fc";

 const { Meta } = Card;
 const { Header, Content, Footer, Sider } = Layout;
const data = [
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
      
  ];
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
   
const Teacher= () => {
  const navigate=useNavigate();
  function handleclick(){
    navigate('/Book')
  }
  function handleclicks(){
    navigate('/homes')
  }
    return (
        <div className="site-card-border-less-wrapper">
            <Layout>
            <Sider style={{  backgroundColor:'#2D4849', height:872, }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" style={{marginTop:10,backgroundColor:'#2D4849' }}>  <img style={{ backgroundColor:'#2D4849' }} src={Logo} className="adminlogo" alt="no image" /> </div>
        
        <Menu style={{backgroundColor:'#2D4849',height:600,color:'white' }}>
        <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}> <Link to='/'><GrHomeRounded/> Dashboard</Link></Menu.Item>
        <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/course'}><MdLiveTv/> Courses</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/Book'}><MdManageAccounts /> Manage Teachers</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/managestu'}><AiOutlineTeam  /> Manage Students</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/room'}><RiLiveLine/> Live Classes</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/News'}><BiWorld/> news & notification</Link></Menu.Item>
           <Menu.Item key='setting' hoverable 
    style={{ backgroundColor:'#FDB137'}}><Link to={'/setting'}><IoSettingsSharp /> Settings</Link></Menu.Item>
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
         <Card
    title="Manage Students"
    input='searach'
    bordered={false}
    style={{
      width: 1200,
      margin:21
    }}
  >
  <div   style={{
     
      marginTop:-70,
      marginLeft:150,
      borderRadius:5
    }} className='divshows'><Search  placeholder=" search by Name,Email,Course,Phone " onSearch={onSearch} style={{

      marginTop:-10
    }} /></div><div style={{
      marginTop:-36,
      width:170,
      borderRadius:10,
      height:40,
      marginLeft:880,
      backgroundColor:'#FDB137',}}><Button   onClick={handleclicks} style={{
      
       
        borderRadius:10,
        height:40,
        width:200,
        backgroundColor:'#FDB137',
        color:'white'}}><FiFilter style={{
        
       
         
          height:25,
          width:40,
          color:'white'}} />  Add new Teacher</Button></div>
<Row style={{
     width:860,
     marginTop:20,
     backgroundColor:'#EAECF0',

     borderRadius:3
   }}>
    <Button style={{
     
     width:2,
     height:25,margin:5,
     marginTop:2
   }}></Button>
<Col xs={23} sm={16} md={12} lg={8} xl={5}>Name </Col>
<Col xs={23} sm={16} md={12} lg={8} xl={3}>Role</Col>
<Col xs={23} sm={16} md={12} lg={8} xl={4}>Phone</Col>
<Col xs={23} sm={16} md={12} lg={8} xl={4}>Email address</Col>
<Col style={{
     
     marginLeft:20
     }}xs={23} sm={16} md={12} lg={8} xl={3}>Status</Col>
<Col style={{
     
   marginLeft:10
   }}xs={23} sm={16} md={12} lg={8} xl={3}>Actions</Col>
</Row>
<Row>
<Col>
<Card   style={{
        
       
       }}
         bordered={false} >
       <List  style={{
      marginLeft:-20
      }}
   itemLayout="horizontal"
   dataSource={data}
   renderItem={(item) => (
     <List.Item>
       <Button style={{
         height:23,
        width:1,marginLeft:-20,
      marginTop:-30}}></Button><List.Item.Meta
       
         avatar={item.avatar}
         title={item.title}
         description={item.description}
         style={{
         width:90,
         marginTop:-8,
          marginLeft:17}}
       />  
     </List.Item>
   )}
 /></Card></Col>




<Col   style={{
        
          marginTop:29,
          marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
  Frontend
  </Col>
  <Col   style={{
        
        marginTop:29,
        marginLeft:6}} xs={23} sm={16} md={12} lg={8} xl={2}>
  0967788990
  </Col>
  <Col   style={{
        
        marginTop:29,
        marginLeft:45}} xs={23} sm={16} md={12} lg={8} xl={2}>
  wex@gmail.com
  </Col>
  <Col   style={{
        
        marginTop:29,
        marginLeft:78}} xs={23} sm={16} md={12} lg={8} xl={2}>
  Active
  </Col>
  <Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
   <MdClear/> 

  <FiEdit2/>
 
  </Col>
  
</Row>
<Row  style={{
        
        marginTop:-490,
        marginLeft:190
        }}>
<Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
Backend
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
0925369856
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:62}} xs={23} sm={16} md={12} lg={8} xl={2}>
scx@gmail.com
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:95}} xs={23} sm={16} md={12} lg={8} xl={2}>
in-Active
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:39}} xs={23} sm={16} md={12} lg={8} xl={2}>
 <MdClear/> 

<FiEdit2/>

</Col>
</Row>
<Row  style={{
        
        marginTop:16,
        marginLeft:190
        }}>
<Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
Backend
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
0925369856
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:62}} xs={23} sm={16} md={12} lg={8} xl={2}>
scx@gmail.com
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:95}} xs={23} sm={16} md={12} lg={8} xl={2}>
in-Active
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:39}} xs={23} sm={16} md={12} lg={8} xl={2}>
 <MdClear/> 

<FiEdit2/>

</Col></Row>

<Row  style={{
        
        marginTop:16,
        marginLeft:190
        }}>
<Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
Backend
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
0925369856
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:62}} xs={23} sm={16} md={12} lg={8} xl={2}>
scx@gmail.com
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:95}} xs={23} sm={16} md={12} lg={8} xl={2}>
in-Active
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:39}} xs={23} sm={16} md={12} lg={8} xl={2}>
 <MdClear/> 

<FiEdit2/>

</Col></Row>

<Row  style={{
        
        marginTop:16,
        marginLeft:190
        }}>
<Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
Backend
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
0925369856
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:62}} xs={23} sm={16} md={12} lg={8} xl={2}>
scx@gmail.com
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:95}} xs={23} sm={16} md={12} lg={8} xl={2}>
in-Active
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:39}} xs={23} sm={16} md={12} lg={8} xl={2}>
 <MdClear/> 

<FiEdit2/>

</Col></Row>

<Row  style={{
        
        marginTop:15,
        marginLeft:190
        }}>
<Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
Backend
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
0925369856
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:62}} xs={23} sm={16} md={12} lg={8} xl={2}>
scx@gmail.com
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:95}} xs={23} sm={16} md={12} lg={8} xl={2}>
Active
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:39}} xs={23} sm={16} md={12} lg={8} xl={2}>
 <MdClear/> 

<FiEdit2/>

</Col></Row>

<Row  style={{
        
        marginTop:14,
        marginLeft:190
        }}>
<Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
Backend
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
0925369856
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:62}} xs={23} sm={16} md={12} lg={8} xl={2}>
scx@gmail.com
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:95}} xs={23} sm={16} md={12} lg={8} xl={2}>
Active
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:39}} xs={23} sm={16} md={12} lg={8} xl={2}>
 <MdClear/> 

<FiEdit2/>

</Col></Row>


<Row  style={{
        
        marginTop:34,
        marginLeft:190
        }}>
<Col   style={{
        
        marginTop:29,
        marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
Backend
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:27}} xs={23} sm={16} md={12} lg={8} xl={2}>
0925369856
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:62}} xs={23} sm={16} md={12} lg={8} xl={2}>
scx@gmail.com
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:95}} xs={23} sm={16} md={12} lg={8} xl={2}>
Active
</Col>
<Col   style={{
      
      marginTop:29,
      marginLeft:39}} xs={23} sm={16} md={12} lg={8} xl={2}>
 <MdClear/> 

<FiEdit2/>

</Col></Row>
  </Card>
           
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

export default Teacher;