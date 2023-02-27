import Navbar from "./navbar";
import Right from "./right_component";


import { ReactComponent as Icon5 } from "../svg/icon5.svg";

const Containers = () => {
    return (
        <div className="container">
            <div className="font">
                  <Right />

                  </div>
        <div className="circle">
            <div className="circle2">
               <Icon5/>
            </div>
        </div>
        
          {/* <Navbar className="nav" /> */}
          
        </div>
    );
}

export default Containers;