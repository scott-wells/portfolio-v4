// Imports
import React, { useState } from "react"
import { Link } from "gatsby"
//images
import BurgerIcon from "../images/icons/burger"


// Render
const Navbar = () => {

    // State 
    const [ burgerOpen, setBurgerOpen ] = useState(false)
    const [ addClass, setAddClass ] = useState('hide')

    // Effects

    // Functions
    // 
    // toggles the mobile menu open and close
    const toggleBurger = () => { 
        setBurgerOpen(!burgerOpen) // toggles boolean
        setAddClass(!addClass) // toggles a '.hide' class
    }

    return (
        <header className='header'>

            {/* logo */}
            <Link to='/'>
                <p className='logo'>SW</p>
            </Link>

            {/* navigation */}
            <button type="button" className="burger" onClick={toggleBurger}>
                <BurgerIcon></BurgerIcon>
            </button>

            {/* mobile-nav */}
            {/* if burgerOpen is true, toggle open nav */}
            {burgerOpen &&
            <nav className={`mobile-nav ${addClass}`}>
                <Link to='/#work'>Work</Link>
                <Link to='/#contact'>Contact</Link>
                {/* <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/> */}
            </nav>
            }

            {/* desktop-nav */}
            {/* hidden under 576px */}
            <nav className="desktop-nav">
                <Link to='/#work'>Work</Link>
                <Link to='/#contact'>Contact</Link>
            </nav>
        </header>
    )
}



export default Navbar