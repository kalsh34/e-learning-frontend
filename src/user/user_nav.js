import LOGO from'./logo container.png';
import{BiCategory} from'react-icons/bi';
import{BsBell} from'react-icons/bs';
import Profile from'./profile.jpg';
import'./nav.css';
const User_nav = () => {
    return ( 
        <div className="bar">
            <div className='thelogo'>
           <img src={LOGO} alt="" />
            </div>

            <div className='ucatagory'>
                <BiCategory/>
              <h2>Category</h2>
            </div>

            <div className='route'>
              <nav>
                <a href="">Home</a>
                <a href="">Progress</a>
              </nav>

              <div className="search">
                <input type="text" name="" id="" placeholder='search here' />
              </div>

              <div className="profile">
                <h2>My Class</h2>
               <BsBell/>
                <img src={Profile} alt="Avatar" className='avatar' />
              </div>
            </div>
        </div>
     );
}
 
export default User_nav;