import { ReactComponent as Icon1 } from "../svg/icon1.svg";
import { ReactComponent as Icon2 } from "../svg/icon2.svg";
import { ReactComponent as Icon3 } from "../svg/icon3.svg";
const Information = () => {
    return ( 
        <div className="information">
            <div className="list_info">
             <h6 className="hw"><Icon1/> 2000+</h6>
            <p className="pw">Special Courses</p>
            </div>
        <div className="list_info2">
         <h6 className="hw"><Icon2/>60,000+</h6>
         <p className="pw">Enrolled Students</p>
        </div>
        <div className="list_info3">
          <h6 className="hw"><Icon3/>5,000+</h6>
          <p className="pw">Expert Instructors</p>
        </div>
        </div>
     );
}
 
export default Information;