import React, { useContext } from 'react'
import { Themecontext } from '../contexts/ThemeContextProvider';


const Theme = () => {
  const{theme,toogleTheme}=  useContext(Themecontext);
  return (
    <div style={{backgroundColor:theme==='black' ? 'black' :'white',color:theme==='black' ?'white':'black'}}>
      {/* {theme} */}
      <button onClick={toogleTheme}>{theme==='black' ?<p>White</p>:<p>black</p>}</button>
      <p>This is text</p>
    </div>
  )
}

export default Theme
