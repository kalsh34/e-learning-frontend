import React,{useState} from 'react';
import carddata from './All_course_cardData';
import All_course_card from './All_course_card';

const All_con = () => {
    const [datas, setdatas] = useState(carddata());
  const [mapcard, setmapcard] = useState(datas.map((item)=>(
    <All_course_card datas={datas} item={item}/>
  )));
  return (
    <div className='All_container'>
    {mapcard}
    </div>
  )
}

export default All_con;