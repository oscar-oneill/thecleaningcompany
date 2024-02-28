/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from 'react'

export const AppContext = createContext();

export const AppContextProvider = props => {
    const menuRef = useRef(null);
    const [navMenu, setNavMenu] = useState(false);
    const showMenu = () => setNavMenu(!navMenu);
    
    return (
        <AppContext.Provider 
            value={{ 
                menuRef,
                navMenu, setNavMenu,
                showMenu
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}