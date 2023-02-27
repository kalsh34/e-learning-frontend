import Arrow from'./arrow (1).png';
import data from'../Helina/card-data';
import { useState } from 'react';
import'./userpage.css';
import{IoBookmarkOutline}from'react-icons/io';
import { Card } from 'antd';
import Fotter_Container from '../Footer/fotter _container';
const User_page = () => {
    const { Meta } = Card;
const [sugestion, setsugestion] = useState(data());

    return ( 
        <div className='ak'>
<div className="T1">
            <h2>Welcome  back <span className="color">Brex</span> , ready or your next lesson? </h2>
            <button className="history"><p>View Watch History</p> <img src={Arrow} alt="" /></button>
            </div>
            <div className="course_slide">
               {
                sugestion.map((sug)=>(
                <div className='foryou'>
                    <img src={sug.Image} alt="" />
                    <div className="col">
                     <h2>{sug.name}</h2>
                    <p>{sug.desc}</p>
                    </div>
                </div>
                ))
               }
            </div>
            <div className="course_slide2">
                <div className="T2">
                <h2>Recommended for you</h2>
                <button className="history"><p>View Watch History</p> <img src={Arrow} alt="" /></button>
                </div>
                <div className="T4">
                {
                sugestion.map((sug)=>(
                 
                    <Card
                    hoverable
                    style={{
                      width: 240,
                      
                    }}
                    cover={<img alt="example" src={sug.Image} />}
                  >
                    <Meta title={sug.name} description={sug.desc} />
                  </Card>
            
                ))
               }
               </div>
      
            </div>
            <Fotter_Container/>
        </div>
     
     );
}
 
export default User_page;