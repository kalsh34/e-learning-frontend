import React from "react";
import beg from './Svg/beg.svg';
import teacher from './Svg/teacher.svg';
import {BsTelephone} from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';
import {GrLocation} from 'react-icons/gr';
import Fotter_Container from '../Footer/fotter _container';


const Contact = () => {
    return(
        <div className="navbek">
            <div className="homebek">
   <p><bdo className="bdo">//Contact US</bdo></p>
            
            </div>
            
            {/* <div className="contact-us2"><h1>Contact<bdo className="bdo">US</bdo> </h1> </div> */}
            <img className="begbek" src={beg} alt="p" />
            <img className="teacherbek" src={teacher} alt="p" />
            
          <div className="mapbek">
                {/* <iframe width="1006" height="584" src="https://maps.google.com/maps?width=1313&amp;height=768&amp;hl=en&amp;q=CMC+(location)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
                <iframe width="906" height="584" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.455291563856!2d38.83337991430355!3d9.0221647935256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b4d4edea511%3A0x64d206dc3a577468!2sDan%20Energy%20Research%20and%20Development%20PLC!5e0!3m2!1sen!2set!4v1673593815997!5m2!1sen!2set" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                
            </div>
                
                <div className="leftbek">
               
                  <BsTelephone className="icobek"/>
                  <p className="callsbek">Phone Number</p>
                  <p className="callss">+25910900</p>
                 <MdOutlineEmail className="icos" />
                
                 <p className="callss">Email Adderss</p> 
                 <p className="callss">email100@gmail.com</p>
                  <GrLocation className="icos"/>
                  <p className="callsss">Office Address.</p>
                  <p className="callss">CMC , AA, Ethiopia</p>
                  </div>                          
 
                <div className="rightbek">
                
                <div className="contact-us22"><h1>Get in Touch<bdo className="bdo22">With Us</bdo> </h1> </div>

    <input type="text" id="fname" name="firstname" placeholder="Your name"></input>
    <input type="text" id="lname" name="lastname" placeholder="Your last name"></input>
    <input type="text" id="Subject" name="Subject" placeholder="Subject"></input>
    <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
    <button class=" button1bek">Send Message</button>
        
    
    
    


                
            </div>
            <div className="fottcut123">
            < Fotter_Container />
            </div>
        </div>
      
        
    
    );

    
};
export default Contact;