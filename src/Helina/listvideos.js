const Lvideos = ({didi,items,vid,setdada,index}) => {
    const sett=()=>{
      const slectedtu=didi.filter((state)=>state.vid===vid);
       setdada(slectedtu[0]);
      
    }
    return ( 
       
      
        <div onClick={sett}  className="v1" key={index}>


    </div>
    
     );
}
 
export default Lvideos;