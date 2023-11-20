import './card.css'
import Image21 from './author.png';
import { useEffect, useState } from 'react';

const Card = () => {
  const [about, setabout] = useState();
  useEffect(() => {
    const fetchinstractor=async()=>{
      try{
        const response=await fetch('http://192.168.0.130:5000/instractors')
        const json=await response.json()
        if(response.ok){
          setabout(json)
        }
      }catch(error){
        console.error(error)
      }
    }
    fetchinstractor()
  }, []);
    return ( 

<div className="frame123">
  <div className="title123">
    <p className='pptm'> <spam className='rashi3'>Team Member’s </spam></p>
    <h2 className='h22'>Our Skilled&nbsp;<span className='rashi3'>Instructors</span> </h2>
  </div> 
  <div className='list123'>
   {
    about && about.map((item)=>(
      <div className="card123">
    <img src={"http://192.168.0.130:5000"+item.image} alt="Avat34" class="Avat34"></img>
      <p className='ak'>{item.firstName}</p>
      <p className='p66'>{item.educationStatus}</p>
    </div> 
    ))
   }  

</div>
</div>
     );
}
 
export default Card;