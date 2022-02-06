// Imports
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
//images
import BurgerIcon from "../images/icons/burger"


// Render
const Navbar = () => {

    // State 
    const [ burgerOpen, setBurgerOpen ] = useState(false)
    const [ addClass, setAddClass ] = useState('hide')
    const [ shrinkNav, setShrinkNav ] = useState(false)

    // Watch element
    // useEffect(() => {
    //     const handler = () => {
    //         setShrink((shrinkNav) => {
    //             if (
    //               !shrinkNav &&
    //               (document.body.scrollTop > 20 ||
    //                 document.documentElement.scrollTop > 20)
    //             ) {
    //               return true;
    //             }
        
    //             if (
    //               shrinkNav &&
    //               document.body.scrollTop < 4 &&
    //               document.documentElement.scrollTop < 4
    //             ) {
    //               return false;
    //             }
        
    //             return shrinkNav;
    //           });
    //     };
    
    //     window.addEventListener("scroll", handler);
    //     return () => window.removeEventListener("scroll", handler);
    //   }, []);

    // Functions
    // toggles the mobile menu open and close
    const toggleBurger = () => { 
        setBurgerOpen(!burgerOpen) // sets boolean
        setAddClass(!addClass) // toggles a '.hide' class
    }

    return (
        <header className='header'>

            {/* logo */}
            <Link to='/'>
                <p className='logo'>SW</p>
            </Link>

            {/* navigation */}
            <div className="burger" onClick={toggleBurger}>
                <BurgerIcon></BurgerIcon>
            </div>

            {/* if burgerOpen is true, toggle open nav */}
            {burgerOpen &&
                <nav className={`nav-links ${addClass}`}>
                <Link to='/#work'>Work</Link>
                <Link to='/#contact'>Contact</Link>
            </nav>
            }
        </header>
    )
}



export default Navbar