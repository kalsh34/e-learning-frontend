import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Card = ({data = null}) => {
  const handleclick=async(id)=>{
    try{
      const response= await axios.get(`courses/${id}`)
      navigate(`/page/${id}`)
    }catch(error){
      console.log(error)
    }
  }

  const navigate=useNavigate()
  const sign=()=>{
    const isLogedIn =   localStorage.getItem("isLogedIn") === "true" ? true : false;
    if(isLogedIn){
  navigate('/page')
    }else{
      navigate('/sign_in')
    }
  }
  // console.log(data)
  // const settutorial=()=>{
  //   const slectedtuts=info.filter((state)=>state.id===id);
  //    setcurrent(slectedtuts[0]); 
  // }
 if(data)


 return ( 
    
        <div className="card"onClick={()=>handleclick(data._id)} >
            <img className="imgh" src={data.image} alt="" />
            <div className="card_text">
              <p className="inst">{data.courseName}</p>
              <p className="inst1">{data.description.slice(0,30)}</p>
              
            </div>
        </div>
       
     );
  else <></>
}
 
export default Card;