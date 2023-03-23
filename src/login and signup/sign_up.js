
import'./signup.css';
import{useFormik} from'formik';
import * as Yup from"yup";
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
const Sign_up = () => {
  const [err, seterr] = useState();
  const navigate = useNavigate();
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!firstName.trim() || /\d/.test(firstName) || firstName.length < 3 || firstName.length > 50) {
      errors.firstName = "First name is required and should not contain numbers. It should also be between 3 and 50 characters long.";
      isValid = false;
    }
    
    if (!lastName.trim() || /\d/.test(lastName) || lastName.length < 3 || lastName.length > 50) {
      errors.lastName = "Last name is required and should not contain numbers. It should also be between 3 and 50 characters long.";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/\d/.test(password)) {
      errors.password = "Password must contain at least one digit";
      isValid = false;
    } else if (!/[a-z]/.test(password)) {
      errors.password = "Password must contain at least one lowercase letter";
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter";
      isValid = false;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      errors.password = "Password must contain at least one special character";
      isValid = false;
    }
    
    
    
    
    

    seterror(errors);

    return isValid;
  };

  const post = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const signup = { firstName, lastName, email, phoneNumber, password };
    const response = await fetch("/auth/register", {
      method: "Post",
      body: JSON.stringify(signup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      seterror(json.error);
    }
    if (response.ok) {
      navigate("/sign_in");
      alert("succesfull");
    }
  };
 
    return ( 
        <div className="contianer_signup">
          <h1 className='a0'>Sign Up</h1>
          <p className='a1'>Get started with your Google Account.</p>


          <div className="forms" onSubmit={post}>
            <form  action="" >
              <label htmlFor="" className='a2'>FirstName</label>
              <input
            className="in1"
            type="text"
            name=""
            id=""
            onChange={(e) => setfirstname(e.target.value)}
            value={firstName}
          />
          {error && error.firstName && (
            <p className="a2"style={{'color':'red'}}>{error.firstName}</p>
          )}
             <label htmlFor="" className='a2'>LastName</label>
             <input
            type="text"
            className="in1"
            onChange={(e) => setlastname(e.target.value)}
            value={lastName}
          />
          {error && error.lastName && (
            <p className="a2"style={{'color':'red'}}>{error.lastName}</p>
          )}
              <label htmlFor="" className='a2'>Phone number</label>
              <input
            type="text"
            className="in1"
            onChange={(e) => setphonenumber(e.target.value)}
            value={phoneNumber}
          />
          {error && error.phoneNumber && (
            <p className="a2"style={{'color':'red'}}>{error.phoneNumber}</p>
          )}
              <label htmlFor="">Email</label>
              <input
            type="tel"
            className="in1"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          {error && error.email && (
            <p className="a2"style={{'color':'red'}}>{error.email}</p>
          )}
        
                <label htmlFor="" className='a2'>password</label>
                <input
            type="password"
            className="in1"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
          {error && error.password && (
            <p  className="a2" style={{'color':'red'}}>{error.password}</p>
          )}

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