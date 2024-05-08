import { ThemeContext } from '../context/ThemeContextProvider';
import { FC, useContext } from 'react';
import { BsMoon } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi'
import { THEME_MODE } from '@/Enums';

function Header(): JSX.Element{

   const {
      toggleTheme,
      mode
   } = useContext(ThemeContext)

   return(
      <header>
         <div className='header-inner'>
            <h1>Where in the world?</h1>
            <div className="theme-switcher-container">
               <button onClick={() => toggleTheme()}>
                  {
                     mode === THEME_MODE.LIGHT_MODE ?
                     <BsMoon />
                     :
                     <BiSun />
                  }
                  <span>{mode === THEME_MODE.DARK_MODE ? "Light Mode" : "Dark Mode"}</span>
               </button>
            </div>
         </div>
      </header>
   )
}

export default Header as FC;