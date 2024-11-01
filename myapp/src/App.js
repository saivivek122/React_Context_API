import { useContext } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Theme from './components/Theme';
import { Themecontext } from './contexts/ThemeContextProvider';



function App() {
  const{theme,toogleTheme}=  useContext(Themecontext);
  return (
    
    <div style={{backgroundColor:theme==='black' ? 'black' :'white',color:theme==='black' ?'white':'black'}}>
    {/* {theme} */}
    <button onClick={toogleTheme}>{theme==='black' ?<p>White</p>:<p>black</p>}</button>
    <p>This is text</p>
    <NavBar/>
   
   
    
    
    </div>
  );
}

export default App;
