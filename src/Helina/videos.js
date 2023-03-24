const Videos = ({dada,current,select,card,vid}) => {
    console.log("keyua wef",dada)
    return ( 
        <video src={dada.v1} className='video' controls poster={current.image}></video>
     );
}
 
export default Videos;