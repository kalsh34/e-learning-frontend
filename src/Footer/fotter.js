import Logo1 from'./logo.png';
import { Link, useNavigate } from "react-router-dom";

const Fotter = () => {
   const navigate=useNavigate()
   const handlnav=()=>{
      navigate('/about')
   }
   const handlnv=()=>{
      navigate('/contact')
   }
    return ( 
        <div className="fotter_all">
         <div className="fotter1">
           <img className='logof' src={Logo1} alt="" />
           <p className='footer12'>our e-learning website in Ethiopia is a comprehensive
platform dedicated to providing students and professionals with access
to high-quality educational resources. It offers a variety of courses,
lectures, and tutorials in a wide range of disciplines including languages, science,
technology, business, math, engineering and much more. </p>

         </div>
         <div className="fotter2">
          <h1>Company</h1>
          <p>Home</p>
         <p className='link' onClick={handlnav}>About us</p>
          <p className='link' onClick={handlnv}>Contact Us</p>
          <p>instructor</p>
         </div>
         <div className="fotter3">
         <h1>Help</h1>
          <p>Customer Support</p>
          <p>Delivery Detail</p>
          <p>Term and Condition</p>
          <p>Privacy Policy</p>
         </div>
         <div className="fotter4">
            <h1>News Letter</h1>
            <input className='feild' type="text" />
            <button>Subscribe</button>
         </div>
        </div>
     );
}
 
export default Fotter;