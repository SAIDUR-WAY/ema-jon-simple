import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { authContext } from '../AuthProvider/AuthProvider';
const Header = () => {
     const {user, logOut} = useContext(authContext);

     const handleSignOut = ()=>{
          logOut()
          .then(()=>{})
          .catch(error=>{
               console.error(error.message)
          })
     }

     return (
          <nav className='header'>
               <img src={logo} alt="" />
               <div className='link-box'>
                    <ActiveLink to="/">Shop</ActiveLink>
                    <ActiveLink to="/order">Order</ActiveLink>
                    <ActiveLink to="/invantory">Manage Inventory</ActiveLink>
                    <ActiveLink to="/login">Login</ActiveLink>
                    <ActiveLink to="/signup">SignUp</ActiveLink>
                    {
                         user ? 
                         <>
                         <span className='user-email'>{user.email}</span>
                         <Link onClick={handleSignOut}>signOut</Link>
                         </>
                         : <Link to='/login'><button>SignIn</button></Link>
                    }
               </div>
          </nav>
     );
};

export default Header;