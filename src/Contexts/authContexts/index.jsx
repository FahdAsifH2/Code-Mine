import { use, useState } from "react";
import {auth, onAuthStateChanged} from "firebase/auth";
import React, { useEffect,useContext } from 'react';
import {useAuth} from './AuthContext'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children})
{
    const [currentUser,UpdatState]=useState(null);
    const[userLoggedIn,setUserLoggedIn]=useState(null);
    const[loading,setLoading]=useState(null);


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser)
        return unsubscribe
    })


    async function initializeUser(user){
        if (user){
            setCurrentUser({...user})
            setUserLoggedIn(true)
        }
        else
        {
            setCurrentUser(null)
            userLoggedIn(false)
        }
        setLoading(false)
    }

    const vlaue ={
        currentUser,userLoggedIn,loading
    }

    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}