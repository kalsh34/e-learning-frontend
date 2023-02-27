import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const Helina = ({acounting,card1,workout=[],helinaHandler}) => {
    // const [workout,setWorkout] = useState([])

    // useEffect(() => {
    //     async function fetchWorkout() {
    //       const response = await axios.get('/category');
    //       const response2 = await axios.get('/cources');
    //       const workoutData = response.data;
    //       const courseData = response2.data;
    //       setWorkout(workoutData);
    //       console.log("yehew data endefelk argew")
    //       console.log(courseData);
    //     }
    //     fetchWorkout();
    //   }, []);
    
    const helinaRef = useRef();
    const showNavbar = () => {
        helinaRef.current.classList.toggle("responsive_helina");
//         const{workout,dispatch}=useWorkoutContext()
//         useEffect(() => {
//           const fetchworkout=async()=>{
//             const response=await fetch('/category')
//             const json=await response.json()
//             if(response.ok){
//               dispatch({type:'SET_WORKOUTS',payload:json})
//             }
//           }
//           fetchworkout()
//         }, []);
     }
    return ( 
        <div className="helina">
        <div className="">
        </div>
        <div className="helina_contianer">
            <div className="helina_nav">
            </div>
       <nav className="helina_nav" ref={helinaRef}>
        <a href="javascript:void(0)" onClick={()=>helinaHandler("")}>All Catagories</a>
        {/* <Link onClick={acounting}>Accounting</Link> */}
        {
         workout.map(c=> <a onClick={()=>helinaHandler(c.name)} href="javascript:void(0)">{c.name}</a>)
        }
        {/* <a href="">Business</a>
        <a href="">Design</a>
        <a href="">Design</a>
        <a href="">Health & Fitness</a>
        <a href="">IT& Software</a>
        <a href="">Marketing</a>
        <a href="">Photohraphy</a> */}
        <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
       </nav>
    
        </div>
 
        </div>
     );
}
 
export default Helina;