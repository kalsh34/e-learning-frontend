const Videos = ({dada,current,select,card}) => {
    console.log("keyua wef",dada)
    return ( 
        <video src={dada.v1} className='video' controls poster={current.image} ></video>
     );
}
 
export default Videos;