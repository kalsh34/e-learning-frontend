import React from 'react';
// import CourseContainer from '../Courses-Section/CourseContainer';
import All_course_header from './All_course_header';
// import SearchBox from './SearchBox';
import All_con from './All_con';
import All_course_nav from './All_course_nav'

// import Navbar from './navbar';

import'../All Course Style/All_card.css';
import'../All Course Style/All_con.css';
// import '../All Course Style/All_nav.css';
import'../All Course Style/All_course_header.css';
// import'../All Course Style/SearchBox.css';
import'../All Course Style/header222.css';
const All_course_container = () => {
  
  return (
    <div className='All-heli'>
        {/* <Header222/> */}
        {/* <CourseContainer/> */}
        {/* <Navbar/> */}
        <All_course_nav/>
        <All_course_header/>
        <All_con/>
       
    </div>
  )
}

export default All_course_container;