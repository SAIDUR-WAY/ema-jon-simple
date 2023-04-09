import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
     return (
          <nav className='header'>
               <img src={logo} alt="" />
               <div className='link-box'>
                    <ActiveLink to="/">Shop</ActiveLink>
                    <ActiveLink to="/order">Order</ActiveLink>
                    <ActiveLink to="/inventory">Manage Inventory</ActiveLink>
                    <ActiveLink to="/login">Login</ActiveLink>
               </div>
          </nav>
     );
};

export default Header;