import Logo1 from'./logo.png';
const Fotter = () => {
    return ( 
        <div className="fotter_all">
         <div className="fotter1">
           <img className='logof' src={Logo1} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur. Risus sem <br /> mi laoreet aliquet lectus a nec varius. Sit amet amet <br /> pellentesque a ipsum a sit mi. Fermentum iaculis <br /> maecenas a aenean. </p>

         </div>
         <div className="fotter2">
          <h1>Company</h1>
          <p>Home</p>
          <p>About us</p>
          <p>Courses</p>
          <p>instructor</p>
         </div>
         <div className="fotter3">
         <h1>Help</h1>
          <p>Customer Support</p>
          <p>Delivery Detail</p>
          <p>Term and Condition</p>
          <p>Privacy Policy</p>
         <div className='hr'><hr ></hr>
         <p>© Copyright 2022, All Rights Reserved by<p/>
             Dan Energy, Ethiopia</p>
         </div> 
         </div>
         <div className="fotter4">
            <h1>News Letter</h1>
            <input className='feild' type="text" placeholder='Enter your email address'/>
            <button>Subscribe</button>
            
         </div>
        


         
        </div>
     );
}
 
export default Fotter;