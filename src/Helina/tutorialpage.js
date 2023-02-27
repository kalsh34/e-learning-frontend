import { useState } from 'react';
import data from'./card-data';
import './tutorial.css'
import Videos from './videos';
import Detail from '../kal course detail/detaill';
import Lvideos from './listvideos';
const Page = ({current,dada,didi,setdada}) => {
    
  // const sett=()=>{
  //   const slectedvids=didi.filter((st)=>st.vid===vid);
  //    setdada(slectedvids[0]);
    
  // }


  // const [select, setselect] = useState(

  // );
  const [listvid, setlistvid] = useState(didi.map((items,index)=>(
    <Lvideos didi={didi} vid={items.vid} key={items.vid} items={items}setdada={setdada} index={index} />
  )));

    return (  
       <div className='tut1'>
       <div className="cont1">
      
        <p className='p3'>Intro to UX: Designing with a User-Centered Design</p>
        <p className='p2'>Lorem ipsum dolor sit amet consectetur.</p>
       
        <Videos dada={dada} current={current}/>
 
       </div>
     
       <div className="cont2">
        <div className="h33">
        <h3 className='h3'>Course contents</h3>
       
        </div>

        {listvid}
       </div> 
        
       <Detail/>

       </div>
       
     );
}
 
export default Page;