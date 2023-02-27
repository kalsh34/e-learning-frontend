import {motion} from'framer-motion';
const B_card = ({a}) => {
  
    return ( 
        <motion.div className="frame" layout>
        <div className="card">
            <img className="imgh" src={a.Image} alt="" />
            <div className="card_text">
              <p>{a.desc}</p>
              <p className="inst">{a.name}</p>
            </div>
        </div>
        </motion.div>
     );
}
 
export default B_card;