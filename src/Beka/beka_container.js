import { useState } from 'react';
import bdata from'./beka-data';
import Beka_component from './beka_component';
import Beka_header from './beka_header';
const Beka_conatiner = () => {
    const [binfo, setbinfo] = useState(bdata());
    return ( 
        <div className="beka_container">
           <Beka_header className="beka_header"/>
         {binfo.map((bin)=>(
            <Beka_component bin={bin}/>
         ))}
        </div>
     );
}
 
export default Beka_conatiner;