import { useEffect, useState } from 'react';
import data from'./card-data';
import './tutorial.css';
import Videos from './videos';
import Detail from '../kal course detail/detaill';
import Lvideos from './listvideos';
import { useParams } from 'react-router-dom';
import Courses from '../courses';
import axios from 'axios';
import { click } from '@testing-library/user-event/dist/click';

const Page = ({current,dada,didi,setdada}) => {
const [card, setcard] = useState(null);
const [vidoe, setvidoe] = useState(null);
const [vid, setvid] = useState(null);
const [curnt, setcurnt] = useState();
const{id}=useParams()  
    useEffect(() => {


        const fetchcard=async()=>{
          const response=await axios.get(`/courses/${id}`);
          const response2 = await axios.get(`/files/video`);
          setvidoe(response2.data.filter(v=>v.course._id == id)[0].video);
          setvid(response2.data.filter(v=>v.course._id == id));
          console.log("dfghmfgdfdgfgm");
          console.log(response2.data.filter(v=>v.course._id == id));
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



    return (  
       <div className='tut1'>
       <div className="cont1">
      
        <p className='p3'>{card?.courseName}</p>
        <p className='p2'>Lorem ipsum dolor sit amet consectetur.</p>
       
        <Videos dada={{...dada,v1:"http://192.168.0.130:5000/"+vidoe}} current={current}/>
 














































       </div>
     
       <div className="cont2">
        <div className="h33">
        <h3 className='h3'>Course contents</h3>
         
        
   
      {
        vid && vid.map(it=>(
          <ul key={it.id} className='vid34'>
   <li> <a href="" className='vid1234' onClick={click}>{it.videoName}</a> </li>
             </ul>
        ))
      }
   
        </div>
        
       </div> 
        
       <Detail card={card}/>

       </div>
       
     );
}
 
export default Page;