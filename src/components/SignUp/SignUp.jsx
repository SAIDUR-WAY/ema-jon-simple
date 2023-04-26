import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SignUp.css'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../AuthProvider/AuthProvider'

const SignUp = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] =useState('');
  const navigate = useNavigate();

    const {user, handleRegister, handleGoogle} = useContext(authContext);

    // console.log(user,handleRegister)

     const handleSignUp = event =>{

          event.preventDefault()
          setError('')
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          const confirm = form.confirm.value;
          
          if(password !== confirm){
               setError('Do Not Munch in password')
               return
          }
          else if(password.length < 6){
               setError('Please minimum 6 character long password')
               return
          }else if(!/(?=.*[A-Z])/.test(password)){
               setError('Please one UpperCase latter add in password')
               return
          }

          //create user in firebase
          handleRegister(email, password)
          .then(result=>{
            const loggedUser = result.user;
            // console.log(loggedUser)
            setSuccess('Your successful Sign Up')
            form.reset()
            navigate('/login')
          })
          .catch(error=>{
            console.error(error.code)
          })

         

          // console.log(email, confirm, password)
          
     }
      //google sign up
      const handleGoogleSignUp = ()=>{
        handleGoogle()
        .then(result=>{
          const loggedUser = result.user;
          // console.log(loggedUser)
          setSuccess('Your successful logged in')
          navigate('/')

        })
        .catch(error=>{
          setError(error.message)
        })
      }


  return (
    <div className="form-container">
      <h2 className="form-title">SignUp</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Password"
            required
          />
        </div>
        <input
          className="btn-submit"
          type="submit"
          value="SignUp"
        />

        <p className="form-re">
         Already have an account?
          <span className="form-link">
            <Link to="/login">Login</Link>
          </span>
        </p>

        <button onClick={handleGoogleSignUp} className='btn-google'><FontAwesomeIcon icon={faEnvelope} /> Continue With Google</button>
      </form>
      <p><span>{error}</span></p>
      <p className='success'>{success}</p>
    </div>
  )
}

export default SignUp
