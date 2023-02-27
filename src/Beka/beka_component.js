import BekaImage from'./bekaimage.png';
import BekaArrow from'./arrow.png';
const Beka_component = ({bin}) => {
    return ( 
        <div className="b_component">
        
        <div className="beka_image">
            <img src={BekaImage} alt="" />
           
        </div>
        
        <div className="livesection">
        
          <div className="beka_list">
            <img src={bin.icon} alt="" />
            <div className="bekalist2">
                <h1 className='head_2'>{bin.head}.</h1>
                <p className='p-1'> {bin.paragraph}</p>
            </div>

          </div>
          <div className="beka-button">
            <button className='beka-btn'><p>Join now</p><img src={BekaArrow} alt="" /></button>
           
          </div>
          
        </div>
        </div>
     );
}
 
export default Beka_component;