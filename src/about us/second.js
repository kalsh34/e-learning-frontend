import Image3 from './Image1.png'
   import'./second.css'; 
   import Image4 from './ppl.png'
 import Image5 from './course.png'
 import Image6 from './degree.png'
 import './About.css'
 import Image8 from './grad.png'
import { NavLink } from 'react-router-dom';
 
const Second = () => {
    return ( 
      
<div className='connection1'>        
<div className="con6123">
<div className="con7123">
 <img  className='image3123' src={ Image3} />
 <div className="con8123">
    <div>
    <h1>Achieve Your</h1>  
    <h1> <span className='rashi3'>Goals &nbsp; </span>  With Us</h1>
    
    </div>
  <div className='paragraph123'>
  <p className='paragraph123'> Using our e-learning website get access
to high-quality educational resources. It offers a variety of courses,
lectures, and tutorials in a wide range of disciplines including languages, science,
technology, business, math, engineering and much more. </p>
  </div>
  
    <h2 className='brightfe'>
    You can join now <span>and upgrade your skill for</span><span> your&nbsp; <span className='rashi3'>bright future</span></span>
    </h2>
    
    <NavLink to={'/sign_in'} activeClassName="active">
    <button className='btn1123'><span className='start123'>Start A course</span> </button>

    </NavLink>
 </div>  
 <h1 className='proud123'>we are &nbsp; <span className='rashi3'>proud</span> </h1>
<p className='abs'>You don't have to struggle alone, you've got our assistance and help.</p>
<div className='inform123'>
<div>
   
   <img className='im4123' src={Image4}  size={10}  />
   <h3>345,421</h3>
   <p className='ab'>Students Enrolled</p>
</div>

<div>
<img className='im4123' src={Image5}  size={10}  />
<h3>2,485</h3>
   <p className='ab'>Total Courses</p>
</div>

<div>
<img className='im4123' src={Image6}  size={10}  />
<h3>24,085</h3>
   <p className='ab'>Online Learners</p>
</div>

</div>
</div>

 
</div>
  <div className='con11123'>
      <div className='con12123'>
            <p className='p4123'>Why Choses Me</p>
            <div className='h4123'>
                
            
            <h2 className='h4123'>Tools for  &nbsp;<spam className="rashi3"> Teachers</spam></h2>
             <h2 className='h8123t'> And Learners</h2>
             </div>
            <p className='p5123'>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
          <button className='btn1123' type="">Join now</button>
         </div>  
      <div className='con13123'>

      <img className='img3123' src={Image8}/>
     </div>
    </div>

</div>
     );
}
 
export default Second;