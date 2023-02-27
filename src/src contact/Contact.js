import React from "react";
import beg from './Svg/beg.svg';
import teacher from './Svg/teacher.svg';
import call from './Svg/call.svg';
import mess from './Svg/mess.svg';
import loc from './Svg/loc.svg';
import {BsTelephone} from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';
import {GrLocation} from 'react-icons/gr';

const Contact = () => {
    return(
        <div className="nav">
            <div className="home">
   <p className="conthome">Home<bdo className="bdo">//Contact US</bdo></p>
            
            </div>
            
            <div className="contact-us2"><h1>Contact<bdo className="bdo">US</bdo> </h1> </div>
            <img className="beg" src={beg} alt="p" />
            <img className="teacher" src={teacher} alt="p" />
            
          <div className="map">
                {/* <iframe width="1006" height="584" src="https://maps.google.com/maps?width=1313&amp;height=768&amp;hl=en&amp;q=CMC+(location)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
                <iframe width="906" height="584" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.455291563856!2d38.83337991430355!3d9.0221647935256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b4d4edea511%3A0x64d206dc3a577468!2sDan%20Energy%20Research%20and%20Development%20PLC!5e0!3m2!1sen!2set!4v1673593815997!5m2!1sen!2set" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                
            </div>
                
                <div className="left">
               
                  <BsTelephone className="ico"/>
                  <p className="calls">Phone Number <br/>+25910900</p>
                 <MdOutlineEmail className="icos" />
                 <p className="callss">Email Adderss<br/>email100@gmail.com</p>
                  <GrLocation className="icos"/>
                  <p className="callsss">Office Address.<br/>CMC , AA, Ethiopia</p>
                  </div>                          
 
                <div className="right">
                <h1>Get in Touch With Us</h1>
                <ul className="input">
                    <li><input type="text" id="fname" name="Name" placeholder="Name"></input></li>
                    <li><input type="text" id="Email" name="Email" placeholder="Email"></input></li>
                    <li><input type="text" id="Subject" name="Subject" placeholder="Subject"></input></li>
                    <li><input type="text" id="Subject" name="Subject" ></input></li>
                    <li> <input type="submit" value="Sent message"></input></li>
                </ul>
        
    
    
    


                
            </div>
            
        </div>
      
        
    
    );

    
};
export default Contact;