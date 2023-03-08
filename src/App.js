

import'./styles/navbar.css';

import'./styles/Container.css';
import'./styles/right.css';
import'./styles/header2.css';
import'./styles/app.css';
import'./styles/information.css';
import Information from './components/information';
import Header from './components/Header';
import Containers from './components/container';
import Helina from './Helina/helina';
import'./Helina/helina.css';
import { useState } from 'react';
import AppContact from './contact us/App';

import Card from './Helina/helina_card';
import './Helina/card.css'
import Card_container from './Helina/card_container';

import HD from './Helina/helina_header';
import'./Beka/beka_data.css';
import Beka_conatiner from './Beka/beka_container';
import Appp from './dave/src/App';
import Fotter_Container from './Footer/fotter _container';

import {Routes, Route}from'react-router-dom';
import Homee from './Hoome';
import'./styles/home.css';
import Sign_up from './login and signup/sign_up';
import Navbar from './components/navbar';
import Sign_in from './login and signup/Sign_in';
import A_card from './Helina/A_card';
import Page from './Helina/tutorialpage';
import data from'./Helina/card-data';
import a_data from'./Helina/A_data';
import New from './coo/common/News'
import'./Helina/tutorial.css';
import Contact from './src contact/Contact';
import Appabout from './about us/App';
import All_course_container from './all courses/All Courses/All_course_container';
import Appo from './Home2/appo';
import Courses from './courses';
import Dashbordcourse from './coo/common/Dashbordcourse';
import Headerse from './coo/common/Headers';
import Charts from './coo/common/Charts';
import Newcourse from './coo/common/Newcourse';
import Teacherregister from './coo/common/Teacherregister';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ManageStudent from './coo/common/ManageStudent';
import Setting from './coo/common/Setting';
import { useWorkoutContext } from './hooks/useworkoutcontext';
import Test from './Helina/test';
function App() {
  const navigate=useNavigate()
  const{state,dipatch}=useWorkoutContext()
useEffect(() => {
  const user=   localStorage.getItem("isLogedIn") === "true" ? true : false;
  if(user){
  
   navigate('/home2')
  }
  else{
    navigate('/')
  }
}, []);
  const [info, setinfo] = useState(data());

  const [current, setcurrent] = useState(info[0]);
 
  const [card1, setcard1] = useState();
const [didi, setdidi] = useState(current.videos);
const [dada, setdada] = useState(didi[0]);

  return (
    <div className="App">

 <Routes>
 
  <Route path='/'element={<Homee card1={card1} setcurrent={setcurrent} info={info}/>}>
  
  </Route>
<Route path="/sign" element={<Sign_up/>}>

</Route>
<Route path='/sign_in' element={<Sign_in/>}>
</Route>

<Route path='/dashbord' element={<Headerse/>}>
</Route>
<Route path='/course' element={<Dashbordcourse/>}>
</Route>
<Route path='/Newcourse' element={<Newcourse/>}>
</Route>
<Route path='/manageteacher' element={<Teacherregister/>}>
</Route>

<Route path='/managestu' element={<ManageStudent/>}>
</Route>
<Route path='/News' element={<New/>}>
</Route>
<Route path='/setting' element={<Setting/>}>
</Route>
{/* <Route path='/contact' element={<Contact/>}></Route> */}
<Route path='/about' element={<Appabout/>}></Route>
<Route path='/allcourses' element={<All_course_container/>}></Route>
<Route path='/home2' element={<Appo/>}></Route>
<Route path='/contact' element={<AppContact/>}></Route>
<Route path='/courses' element={<Courses/>}></Route>
<Route path='/test/:id' element={<Test/>}></Route>
<Route path='/page/:id' element={<Page current={current} setcurrent={setcurrent}  dada={dada}  setdada={setdada} didi={didi}/>}></Route>
</Routes>
 

<Navbar/>
    </div>
  );
}

export default App;
