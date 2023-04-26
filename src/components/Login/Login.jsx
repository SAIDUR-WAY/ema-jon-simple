import React, { useContext, useState } from 'react'
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const [show, setShow] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {handleLogIn, handleGoogle} = useContext(authContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(handleGoogle)

  const handleSignIn = event =>{
    event.preventDefault()

    setError('');
    setSuccess('');

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password)

    //logIn in firebase
    handleLogIn(email, password)
    .then(result=>{
      const loggedUser = result.user;
      // console.log(loggedUser)
      setSuccess('You are successful Logged in')
      form.reset()
      navigate(from, {replace: true})

    })
    .catch(error=>{
      setError(error.message)
    })
  }
  //google signin
  const handelGoogleSignIn = ()=>{
    handleGoogle()
    .then(result=>{
      const loggedUser = result.user;
      // console.log(loggedUser)
      navigate(from, {replace: true})
    })
    .catch(error=>{
      setError(error.message)
    })
  }



  return (
    <div className="form-container">
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleSignIn}>
          <div className='form-control' >
               <label htmlFor="email">Email</label>
               <input type="email" name="email" placeholder='Email' required />         
          </div>
          <div className='form-control' >
               <label htmlFor="password">Password</label>
               <input type={show ? "text" : "password"} name="password" placeholder='Password' required /> 
               <div onClick={()=>setShow(!show)} className='show-password'> 
               {
                show ? <p>Hide Password</p> : <p>Show Password</p>
              }        
              </div>
          </div>
          <input className='btn-submit' type="submit" name="submit" value="LogIn"/>

          <p className='form-re'>New to Ema-john: <span className='form-link'> <Link to='/signup'>Create a new account</Link></span> </p>

          <button onClick={handelGoogleSignIn} className='btn-google'><FontAwesomeIcon icon={faEnvelope} /> Continue With Google</button>


      </form>
      <p><span>{error}</span></p>
      <p className='success'>{success}</p>
    </div>
  )
}

export default Login
