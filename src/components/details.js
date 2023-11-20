import { Link, NavLink, useNavigate } from 'react-router-dom';
import{useWorkoutContext}from'../hooks/useworkoutcontext';
import { useEffect } from 'react';
import { useState } from 'react';
import './deta.css'
import axios from 'axios';
import { WorkoutContext } from '../context/workoutcontext';
const Details = () => {
  const [workout, setWorkout] = useState(null); // Change to an object instead of an array
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  
  useEffect(() => {
    async function fetchCourses() {
      const response = await axios.get('http://192.168.0.130:5000/courses');
      const coursesData = response.data;
      setCourses(coursesData);
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    async function fetchWorkout() {
      const response = await axios.get('http://192.168.0.130:5000/category');
      const workoutData = response.data;
      setWorkout(workoutData);
    }
    fetchWorkout();
  }, []);
  

  const handleSelection = (id) => {
    const selected = courses.find((course) => course.id === id);
    setSelectedCourse(selected);
    console.log(selected);
  };
const navigate = useNavigate();



return (  
        <div>
          
                  
             
          <select onChange={(e)=>navigate('/allcourses', { state: { cat: e.target.selectedOptions[0].value } })}>
            
            <option value="">Catagories</option>
             <option value=""> all Courses</option>
          {workout && workout.map((item) => ( 
        <option key={item.id} value={item.name} >
          
          {item.name}
        </option>))}
        </select> 
       {/* <h2>{selectedCourse.courseName}</h2> */}

   {/* {
    selecteddata &&(
      <div>
        <h2>{selecteddata.name}</h2>
      </div>
    )
   } */}
  
  </div>
        
    );
}
 
export default Details;