import { createContext, useState } from "react";
import React from 'react'


export const Themecontext=createContext();

export const ThemeContextProvider = (props) => {
  const[theme,setTheme]=useState("white");
  const toogleTheme=()=>{
   setTheme(theme==="black" ?"white":"black")
  }

  return (
    <Themecontext.Provider value={{theme,toogleTheme}}>
      {props.children}
    </Themecontext.Provider>
  )
}




