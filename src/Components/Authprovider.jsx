import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaser/firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export  const Authcontext = createContext();

const Authprovider = ({children}) => {
    const [user, setUser] =  useState(null)
    const [loading, setLoading] = useState(true)
    const googleprovider = new GoogleAuthProvider()
    const handleregister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const handlelogin = (email, password) => {
     return  signInWithEmailAndPassword(auth, email, password)
    }
    const handlelogout = ()=> {
        signOut(auth)
    }
    const handlegooglelogin = ()=> {
     return   signInWithPopup(auth, googleprovider)
    }



    const authinfo   ={
        handlegooglelogin,
        handlelogin,
        handlelogout,
        handleregister,
        user,
         setUser,
         loading
    }

      useEffect (()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
         console.log(currentuser)
         if(currentuser){
          setUser(currentuser)
         }else{
          setUser(null)
         }
         setLoading(false)
          return ()=>{
            unsubscribe()
          }
        })
      }, [])
    return (
        <div>
        {
        <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
        }
        </div>
    );
};

export default Authprovider;