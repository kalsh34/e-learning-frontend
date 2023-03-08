import { useEffect, useState } from 'react';
import data from'./card-data';
import './tutorial.css'
import Videos from './videos';
import Detail from '../kal course detail/detaill';
import Lvideos from './listvideos';
import { useParams } from 'react-router-dom';
import Courses from '../courses';
import axios from 'axios';


const Page = ({current,dada,didi,setdada}) => {
  const [card, setcard] = useState(null);
const [vidoe, setvidoe] = useState(null);
const [vid, setvid] = useState(null);
const{id}=useParams()  
    useEffect(() => {
        const fetchcard=async()=>{
          const response=await axios.get(`/courses/${id}`);
          const response2 = await axios.get(`/files/video`);
          setvidoe(response2.data.find(v=>v.course._id == id).video);
          setvid(response2.data.find(v=>v.course._id == id).videoName);
          console.log(response2.data);
          const data=response.data
      
          setcard(data)
        }
        fetchcard()
      }, []);

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
         
        </div>
        
       </div> 
        
       <Detail/>

       </div>
       
     );
}
 
export default Page;