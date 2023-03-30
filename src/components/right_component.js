import { ReactComponent as Image } from "../svg/image.svg";
import { ReactComponent as Check } from "../svg/check.svg";
import './img.css';
import Img1 from'./hero-right.png';
import { NavLink, useNavigate } from "react-router-dom";
const Right = () => {
   const navigate = useNavigate()
    const handlenav=()=>{
        navigate('/sign')
    }
    return ( <div className="right">
        <div className="para">
    <p>Find The Best Platform</p>
    <p className="color">for Online Course  & </p>
    <p className="color">Learn</p>
    <h5>
        our e-learning website in Ethiopia is 
        a comprehensive  platform  dedicated to providing students   
        and professionals with access to high-quality 
        educational resources. It offers a variety of courses,
        lectures, and tutorials in a wide range of disciplines 
        including languages, science, technology, business, 
        math, engineering and much more.
    </h5>
    {/* <NavLink to={'/sign'}'> */}
    <button className="act" onClick={handlenav}>
        <h4>Get Started</h4>
    </button>
   
       
    <div className="listall">
    <div className="list1">
        
                <h6><Check className="ch"/> Exprienced Instructors</h6>
                <h6><Check className="ch"/>Live Sessions</h6>
             
    </div>
    <div className="list2">
    <h6><Check className="ch"/>Access 2700+ courses</h6>
                <h6><Check className="ch"/>Quality Videos</h6>
          
    </div>
    </div>
    </div>
    <div className="im">
        <img src={Img1} alt="" />
    </div>
  
    </div> );
}
 
export default Right;