import Logo1 from'./logo.png';
import { Link } from "react-router-dom";
const Fotter = () => {
    return ( 
        <div className="fotterH_all">
         <div className="fotter1H">
           <img className='logofH' src={Logo1} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur. Risus sem <br /> mi laoreet aliquet lectus a nec varius. Sit amet amet <br /> pellentesque a ipsum a sit mi. Fermentum iaculis <br /> maecenas a aenean. </p>

         </div>
         <div className="fotter2H">
          <h1>Company</h1>
          <p>Home</p>
         <Link to={'/about'}><p>About us</p></Link> 
          <Link to={'/contact'}><p>Contact Us</p></Link>
          <p>instructor</p>
         </div>
         <div className="fotter3H">
         <h1>Help</h1>
          <p>Customer Support</p>
          <p>Delivery Detail</p>
          <p>Term and Condition</p>
          <p>Privacy Policy</p>
         </div>
         <div className="fotter4H">
            <h1>News Letter</h1>
            <input className='feildH' type="text" />
            <button>Subscribe</button>
         </div>
        </div>
     );
}
 
export default Fotter;