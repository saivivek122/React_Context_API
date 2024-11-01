import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContextProvider'

const NavBar = () => {
    const {isAuth,login,logout}=useContext(AppContext)
  return (
    <div>
    <p>Is Auth :{isAuth ?"yes":"No"}</p>

   {!isAuth&& <button onClick={login}>login</button>}
    {isAuth &&<button onClick={logout}>logout</button>}
    </div>
  )
}

export default NavBar
