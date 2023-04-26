import React, { useContext } from 'react';
import { authContext } from '../components/AuthProvider/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({children}) => {
     
     const {user, loading} = useContext(authContext);
     const location =useLocation()
     console.log(location)

     if(loading){
          return('Loading...')
     }
     if(user){
          return children
     }

     return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default PrivetRouts;