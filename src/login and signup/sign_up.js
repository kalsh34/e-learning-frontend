
import'./signup.css';
import{useFormik} from'formik';
import * as Yup from"yup";
 
const Sign_up = () => {
   
  const formik=useFormik({
    initialValues:{
      Firstname:"",
      Lastname:"",
      email:"",
      phonenumber:"",
      password:"",
    } ,

    validationSchema:Yup.object({
Firstname:Yup.string().max(20,'name must be 20 Character or less').required('First name is required'),
Lasttname:Yup.string().max(20,'name must be 20 Character or less').required('Last name is required'),

email:Yup.string().email('Invalid Email').required('required'),
phonenumber:Yup.number().required('required'),
// password:Yup.required('required'),

    }),
    onsubmit:(values)=>{
console.log(values)
    },
  });
    return ( 
        <div className="contianer_signup">
          <h1 className='a0'>Sign Up</h1>
          <p className='a1'>Get started with your Google Account.</p>


          <div className="forms">
            <form onsubmit={formik.handleSubmit} action="" >
            <label className={`a2 ${formik.errors.name?"text-red-400":""}`}>{formik.touched.name && formik.errors.name?formik.errors.name:"Firstname"}</label>
            <input className='in1' type="text" name="Firstname" id="" placeholder='FirstName'  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

            <label className={`a2 ${formik.errors.name?"text-red-400":""}`}>{formik.touched.name && formik.errors.name?formik.errors.name:"Lastname"}</label>
            <input className='in1' type="text" name="Lastname" id="" placeholder='LastName'  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>


            <label className='a2'>{formik.touched.email && formik.errors.email?formik.errors.email:"Email"}</label>
            <input className='in1' type="Email" name="email" id="" placeholder='Email' value={formik.values.email}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />


             <label className='a2'>{formik.touched.phonenumber && formik.errors.phonenumber?formik.errors.phonenumber:"phonenumber"}</label>
             <input className='in1' type="text" name="phonenumber" id="" placeholder='phonenumber' value={formik.values.phonenumber} onChange={formik.handleChange}/>
             
             
             <label className='a2'>{formik.touched.password && formik.errors.password?formik.errors.password:"password"}</label>
             <input className='in1' type="Password" name="" id="" placeholder='Password' value={formik.errors.password} onChange={formik.handleChange} />

             <div className="buttom">
                <div className="radio">
                <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
<p className='a3'>Remember me</p>

                </div>
                <p className='forgot'>Forgot Password?</p>
             </div>
          <button className='btn44' type='submit'>Create my Account</button>
             </form>
          </div>
        </div>
        
     );
}
 
export default Sign_up;