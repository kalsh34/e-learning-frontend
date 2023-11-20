const Contents = ({current}) => {
    return ( 
        <div>
               {current.videos.map((items,index)=>(
            <div className="v1" key={index}>
            <p className='p'>{items.title}</p>
           
            </div>
            
         ))}
        </div>
     );
}
 
export default Contents;


       

