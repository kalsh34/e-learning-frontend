const Videos = ({dada,current,select}) => {
    return ( 
        <video src={dada.v1} className='video' controls poster={current.Image}></video>
     );
}
 
export default Videos;