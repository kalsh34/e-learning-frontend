import React from 'react'
import { useLocation } from 'react-router-dom';
import Card_container from '../../Helina/card_container';

const All_course_nav = () => {
  const {state} = useLocation();
  const { cat } = state;
  return <Card_container selectedCat={cat} />
  return (
    <div className='All_navs'>
      {/* <header className='nav_header'> */}
        <nav className='navacn'>
          {/* <button className='arrow_btn1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg></button> */}
          <button><a className='acn' href="#UI/UX Design">UI/UX </a></button>
          <button><a className='acn' href="#Marketing">Marketing</a></button>
          <button><a className='acn' href="#Graphics">Graphics</a></button>
          <button><a className='acn' href="#Business">Business</a></button>
          <button><a className='acn' href="#Financial">Financial</a></button>
          <button><a className='acn' href="#Music">Music</a></button>
          {/* <button className='arrow_btn2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></button> */}
        </nav>
        {/* </header> */}
    </div>
  )
}

export default All_course_nav;