import { Link } from "react-router-dom";
const Card = ({data = null}) => {
  // console.log(data)
  // const settutorial=()=>{
  //   const slectedtuts=info.filter((state)=>state.id===id);
  //    setcurrent(slectedtuts[0]);
    
  // }
 if(data)
 return ( 
<Link to={'/page'}>
        <div className="card" >
            <img className="imgh" src={data.image} alt="" />
            <div className="card_text">
              <p className="inst">{data.courseName}</p>
              <p className="inst1">{data.description.slice(0,30)}</p>
              
            </div>
        </div>
        </Link>
     );
  else <></>
}
 
export default Card;