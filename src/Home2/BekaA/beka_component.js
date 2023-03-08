import BekaImage from'./bekaimage.png';
import BekaArrow from'./arrow.png';
const Beka_component = ({bin}) => {
    return ( 
        <div className="bA_component">
        
        <div className="bekaA_image">
            <img src={BekaImage} alt="" />
           
        </div>
        
        <div className="livesectionA">
        
          <div className="bekaA_list">
            <img src={bin.icon} alt="" />
            <div className="bekalist2A">
                <h1 className='head_2A'>{bin.head}.</h1>
                <p className='p-1A'> {bin.paragraph}</p>
            </div>

          </div>
          <div className="bekaA-button">
            <button className='bekaA-btn'><p>Join now</p><img src={BekaArrow} alt="" /></button>
           
          </div>
          
        </div>
        </div>
     );
}
 
export default Beka_component;