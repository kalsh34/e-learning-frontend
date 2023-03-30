import { useEffect, useState } from 'react';
import data from'./card-data';
import './tutorial.css';
import Videos from './videos';
import Detail from './detaill';
import Lvideos from './listvideos';
import { useParams } from 'react-router-dom';
import Courses from '../courses';
import axios from 'axios';
import { click } from '@testing-library/user-event/dist/click';
import Vidcontent from './videocontent';
const Page = ({current,dada,didi,setdada}) => {
const [card, setcard] = useState(null);
const [vidoe, setvidoe] = useState(null);
const [vid, setvid] = useState('');
const [curnt, setcurnt] = useState('');
const [instractors, setinstractors] = useState('');
const{id}=useParams()  
    useEffect(() => {


        const fetchcard=async()=>{
          const response=await axios.get(`/courses/${id}`);
          const response2 = await axios.get(`/files/video`);
          setvidoe(response2.data.filter(v=>v.course._id == id)[0].video);
          setloop(response2.data.filter(v=>v.course._id == id)[0].duration);
          setvid(response2.data.filter(v=>v.course._id == id));
          setinstractors(response.data)
          console.log("dfghmfgdfdgfgm");
          console.log(response.data);
          // setcurnt(response2.data.filter(v=>v.course._id == id)[0]);
          console.log(response2.data.filter(v=>v.course._id == id)[0].video);
          // console.log(response2.data);
          const data=response.data
          console.log()
          setcard(data)
        }
        fetchcard()
      }, []);
      // const [item, setItem] = useState(null);
      // useEffect(() => {
      //   fetch(`/files/video/${id}`)
      //     .then(response => response.json())
      //     .then(data => setItem(data));
      // }, [id]);
  // const sett=()=>{
  //   const slectedvids=didi.filter((st)=>st.vid===vid);
  //    setdada(slectedvids[0]);
    
  // }


  // const [select, setselect] = useState(

  // );
  const [watched, setwatched] = useState();
  const [loop, setloop] = useState();
  const handlecliker=(vido)=>{
    const selectvideo=vid.filter((state)=>state._id===vido)
    setvidoe(selectvideo[0].video)
setloop(selectvideo[0].duration)
  }

 
    return (  
       <div className='tut1'>
       <div className="cont1">
       
        <p className='p3'>{card?.courseName}</p>
        <p className='p2'>By {instractors.instractor?.firstName} {instractors.instractor?.lastName}</p>
         <div  className='AE111'><h3 className='ea'>Course contents</h3></div>
       
        <Videos dada={{...dada,v1:"http://192.168.0.130:5000/"+vidoe}} current={current}/>


       </div>
       <div className="cont2">
      
       <div className="h33">
       
        
       {
     vid && vid.map((it)=>(
      <ul className='vid34'>
      <li   className='vid1234' onClick={()=>handlecliker(it._id)} > {it.videoName} </li>
     
        
                </ul>
        
     ))
     
     
    
     }
       
 
     
  
       </div>
       
      </div>
        
       <Detail instractors={instractors} card={card} loop={loop}/>

       </div>
       
     );
}
 
export default Page;