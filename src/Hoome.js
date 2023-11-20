import'./styles/navbar.css';

import'./styles/Container.css';
import'./styles/right.css';
import'./styles/header2.css';
import'./styles/app.css';
import'./styles/information.css';
import Information from './components/information';
import Header from './components/Header';
import Containers from './components/container';
import Helina from './Helina/helina';
import'./Helina/helina.css';
import { useState } from 'react';
import data from'./Helina/card-data';
import Card from './Helina/helina_card';
import './Helina/card.css'
import Card_container from './Helina/card_container';
import HD from './Helina/helina_header';
import'./Beka/beka_data.css';
import Beka_conatiner from './Beka/beka_container';
import Appp from './dave/src/App';
import Fotter_Container from './Footer/fotter _container';
import { useEffect } from 'react';
import { Route, Routes}from'react-router-dom';
import axios from 'axios';

const Homee = ({acounting,card1,setcurrent}) => {
    useEffect(() => {
        (async()=>{
            await axios.get("/auth/logout")
        })()
    }, []);
    const ScrollableContainer = ({ children }) => {
        return (
          <div style={{ overflowY: "scroll", maxHeight: "680px" }}>
            {children}
          </div>
        );
      };
       
    const [info, setinfo] = useState(data());
 
    return ( 
        <div className="homes">
<Containers/>
<Information/>
<HD/>
<ScrollableContainer>
<Card_container acounting={acounting} card1={card1} setcurrent={setcurrent} info={info} />
</ScrollableContainer>
 <Beka_conatiner/>

<Fotter_Container/>



        </div>
     );
}
 
export default Homee;