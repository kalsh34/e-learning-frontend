import Acon from "./ACARD/Acon";
import AntCon from "./AntCard/AntCon";
// import Scon from "./SavedCard/Scon";
// import  Beka_conatiner from "../Beka/beka_container";

//AntCard
import './AntStyle/AntiCard.css';
import './AntStyle/HEADER.css';

//BekaA from home2
import Beka_conatinerA from "./BekaA/beka_containerA";
import './BekaA/beka_dataA.css';

//Acard
import './ACARD STYLE/Aheader.css';
import './ACARD STYLE/RecoCard.css';

//SStyle
// import './SStyle/SaveCard.css';
// import './SStyle/Sheader.css';

//footer
import FooterCon from './FooterHome2/fotter _containerH';

 import { Route,Routes,BrowserRouter } from "react-router-dom";
import All_course_container from "../all courses/All Courses/All_course_container";
const Appo = () => {
    return ( 
        
        <div>
           
            <AntCon/>
            <Acon/>
            {/* <Scon/> */}
            {/* <div className="bekah2"><Beka_conatiner/>
            </div> */}
            <div className="bekaA2"><Beka_conatinerA/>
            </div>
            <FooterCon/>
            <Routes>
            <Route path='/alllcourses' element={<All_course_container/>}></Route>
            </Routes>
           
        </div>
     
     );
}
 
export default Appo;