import Google from'./Google.png';
import'./signup.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useWorkoutContext } from '../hooks/useworkoutcontext';
import { WorkoutContext } from '../context/workoutcontext';
const Sign_in = () => {
const{state,dispatch}=useWorkoutContext()
  const [email,setEmail]=useState('')
  const [password,setPassord]=useState('')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const log = await axios.post('http://192.168.0.130:5000/auth/login', { email, password });
      const { data } = log
      console.log(data)
      console.log(data.user.role);
      if (data.user.role === 'admin') {
        navigate('/dashbord');
      } else {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('user',JSON.stringify( data.user))
        localStorage.setItem('isLogedIn', 'true');
        // dispatch({isLogied:true)
        navigate('/home2');
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  const isFormValid = () => {
    return email.trim() !== '' && password.trim() !== '';
  };
    return ( 
        <div className="contianer_signup">
          <h1 className='a0'>Sign In</h1>
          <p className='a1'>Get started with your Google Account.</p>
          <button className='google'><img className='googles' src={Google} alt="" />Or Sign Up with Google</button>


          <div className="forms">
            <p className='a2'>Email</p>
            <input className='in1' type="text" name="" id="" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <p className='a2'>Password</p>
             <input className='in1' type="password" name="" id="" placeholder='Password' value={password} onChange={(e)=>setPassord(e.target.value)} />
              
             <div className="buttom">
                <div className="radio">
                <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
<p className='a3'>Remember me</p>

                </div>
                <p className='forgot'>Forgot Password?</p>
             </div>
            
          </div>
          <button
        className="btn46"
        onClick={handleLogin}
        disabled={!isFormValid() || isLoading}
      >
        {isLoading ? 'Loading...' : 'Sign in'}
      </button>
     
          <div className="sign_uplink">
            <p>Don't have an account?</p>
            <NavLink to= {'/sign'} className="underlinehide">
            <p className='scolor' style={{ textDecoration: 'none'}}>SignUp</p>
            </NavLink>
          </div>
        </div>
        
     );
}
 
export default Sign_in;