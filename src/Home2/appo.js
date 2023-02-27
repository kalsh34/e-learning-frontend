import Acon from "./ACARD/Acon";
import AntCon from "./AntCard/AntCon";
import Scon from "./SavedCard/Scon";
import  Beka_conatiner from "../Beka/beka_container";

//AntCard
import './AntStyle/AntiCard.css';
import './AntStyle/HEADER.css';

//Acard
import './ACARD STYLE/Aheader.css';
import './ACARD STYLE/RecoCard.css';

//SStyle
import './SStyle/SaveCard.css';
import './SStyle/Sheader.css';

const Appo = () => {
    return ( 
        <div>
            <AntCon/>
            <Acon/>
            <Scon/>
            <div className="bekah2"><Beka_conatiner/>
            </div>
        </div>
     );
}
 
export default Appo;