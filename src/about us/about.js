import { Avatar,Image } from 'antd';
import Image1 from'./k.png';
import Image2 from './div.png';
import Image3 from './Vec.png';
import './About.css'
const About = () => {
    return ( 
        <div className="rashi">
            <div className="rashi2">
                <p className='rashi31'> Home // &nbsp;<span className="rashi3">About</span></p>
             <div className="rashi4">
               
               <Avatar size={100} src={Image2}  />
             <Avatar size={150} src={Image1}  />
             
             </div>
             
            </div>
            <div>
          
             </div>
            <div className="rashi5">
           <h1 className='rashi32'> About &nbsp;<spam className="rashi3">eLearning</spam></h1>
            </div>

        </div>
     );
}
 
export default About;