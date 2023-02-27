import { ReactComponent as Image } from "../svg/image.svg";
import { ReactComponent as Check } from "../svg/check.svg";
import './img.css';
import Img1 from'./hero-right.png';
import { NavLink } from "react-router-dom";
const Right = () => {
    return ( <div className="right">
        <div className="para">
    <p>Find The Best Platform</p>
    <p className="color">for Online Course  & </p>
    <p className="color">Learn</p>
    <h5>
        our e-learning website in Ethiopia is 
        a comprehensive <br/> platform  dedicated to providing students   
        and professionals with access <br/> to high-quality 
        educational resources. It offers a variety of courses,<br/> 
        lectures, and tutorials in a wide range of disciplines 
        including languages, science,<br/> technology, business, 
        math, engineering and much more.
    </h5>
    {/* <NavLink to={'/sign'}'> */}
    <NavLink to={'/sign_in'} activeClassName="active"> <button>
        <h4>Get Started</h4>
    </button></NavLink>
   
       
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