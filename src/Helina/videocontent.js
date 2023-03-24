const Vidcontent = ({vid,setcurnt,id,it}) => {
    const handlecliker=()=>{
        const selectvideo=vid.filter((state)=>state.id===id)
        console.log(selectvideo)
    }
    return ( 
        
       <div className="cont2">
       <div className="h33">
       <h3 className='h3'>Course contents</h3>
        
       
  
    
      
         <ul className='vid34'>
  <li   className='vid1234' onClick={handlecliker} > {it.videoName} </li>
            </ul>
  
     
  
       </div>
       
      </div> 
     );
}
 
export default Vidcontent;