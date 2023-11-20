import Card from "./helina_card";
import'./card.css';

import data from'./card-data';
import a_data from'./A_data'; 
import {BrowserRouter,Routes,Route} from'react-router-dom';
import A_card from "./A_card";
import Helina from "./helina";
import { Link } from "react-router-dom";
import'./helina.css';
import axios from "axios";
import { useEffect, useRef, useState } from "react";
const Card_container = ({selectedCat = ""}) => {
  const [workout,setWorkout] = useState([]);
  const [courseData,setCourseData] = useState([]);
  const [allCourseData,setAllCourseData] = useState([]);
  useEffect(() => {
    async function fetchWorkout() {
      const response = await axios.get('http://192.168.0.130:5000/category');
      const response2 = await axios.get('http://192.168.0.130:5000/courses');
      const workoutData = response.data;
      const courseData = response2.data;
      setWorkout(workoutData);
      console.log("yehew data endefelk argew")
      console.log(courseData);
      if(selectedCat == "") setCourseData(courseData);
      else setCourseData(courseData.filter(c=>c.category.name == selectedCat));
      setAllCourseData(courseData);
      
    }
    fetchWorkout();
  }, []);


  const helinaHandler = (cat)=>{
    console.log(cat=="")
   if(cat=="") setCourseData(allCourseData);
   else
   setCourseData(allCourseData.filter(c=>c.category.name == cat))  
  }

    return ( 

        <div style={{flexDirection:"column",flexWrap:"nowrap"}} className="card_container">
           <Helina helinaHandler={helinaHandler} workout={workout}/>
            {/* {card1} */}
            <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}}>
            {courseData.map((info)=>(<Card data={info} />))}
           

            </div>
          
        </div>
      
     );
   
}

export default Card_container;