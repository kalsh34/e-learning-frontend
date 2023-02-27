const Player = ({vio,current}) => {
    return ( 
        <div>
            <video src={vio.v1} className='video' controls poster={current.Image}></video>
        </div>
     );
}
 
export default Player;