import { createContext, useState } from "react";
import React from 'react'


export const AppContext=createContext()



export const AppContextProvider = (props) => {
    const[isAuth,setIsAuth]=useState(false)

    const login=()=>{
        setIsAuth(true)
    }

    const logout=()=>{
        setIsAuth(false)
    }
  return (
    <AppContext.Provider value={{isAuth,login,logout}}>
        {props.children}
    </AppContext.Provider>
  )
}


