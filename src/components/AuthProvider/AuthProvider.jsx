import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const authContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
     const [user, setUser] = useState('')
     const [loading, setLoading] = useState(true);
     
     //user registration in firebase
     const handleRegister = (email, password)=>{
          setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
     }
     //User login in firebase
     const handleLogIn = (email, password)=>{
          setLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
     }
     //google signup 
     const handleGoogle = ()=>{
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
     }

     //observe user in firebase
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, currentUser=>{
               console.log(currentUser);
               setUser(currentUser);
               setLoading(false)

          })
          return ()=> unsubscribe()
     }, [])

     //signOut in firebase
     const logOut = ()=>{
          signOut(auth)
     }


     const authInfo = {
          user,
          loading,
          handleRegister,
          handleLogIn,
          handleGoogle,
          logOut,
     }

     return (
          <authContext.Provider value={authInfo}>
              {children}
          </authContext.Provider>
     );
};

export default AuthProvider;