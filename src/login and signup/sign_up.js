
import'./signup.css';
import{useFormik} from'formik';
import * as Yup from"yup";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Sign_up = () => {
  const navigate=useNavigate()
   const [firstName, setfirstname] = useState("");
   const [lastName, setlastname] = useState("");
   const [email, setemail] = useState("");
   const [phoneNumber, setphonenumber] = useState("");
   const [password, setpassword] = useState("");
const [error, seterror] = useState(null);
   const post =async(e)=>{
  e.preventDefault()
  const signup={firstName,lastName,email,phoneNumber,password}
  const response=await fetch('/auth/register',{
    method:"Post",
    body:JSON.stringify(signup),
    headers:{
   'Content-Type':'application/json'
    }
  })
  const json=await response.json()
  if(!response.ok){
    seterror(json.error)
  }
  if(response.ok){
    navigate('/sign_in')
    alert('succesfull')
  
  }
   }
 
    return ( 
        <div className="contianer_signup">
          <h1 className='a0'>Sign Up</h1>
          <p className='a1'>Get started with your Google Account.</p>


          <div className="forms" onSubmit={post}>
            <form  action="" >
              <label htmlFor="" className='a2'>FirstName</label>
              <input className='in1' type="text" name="" id="" onChange={(e)=>setfirstname(e.target.value)} value={firstName}/>
             <label htmlFor="" className='a2'>LastName</label>
             <input type="text" className='in1'onChange={(e)=>setlastname(e.target.value)} value={lastName} />
              <label htmlFor="" className='a2'>Email</label>
              <input type="text"  className='in1'  onChange={(e)=>setemail(e.target.value)} value={email}/>
              <label htmlFor="">PhoneNumber</label>
                <input type="text"className='in1' onChange={(e)=>setphonenumber(e.target.value)} value={phoneNumber}/>
                <label htmlFor="" className='a2'>Password</label>
               <input type="text" name="" id=""  className='in1' onChange={(e)=>setpassword(e.target.value)} value={password}/>

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