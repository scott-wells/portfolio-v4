// Imports
import * as React from "react"
import { Link } from "gatsby"
//images
import BurgerIcon from "../images/burger"


// State Functions


// Render
const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='logo'>
                    <span>SW</span>
                </div>
            </Link>
            <div className="burger">
                <BurgerIcon></BurgerIcon>
            </div>
            {/* <nav className='nav-links'>
                <Link to='/#projects'>Projects</Link>
                <Link to='/#contact'>Contact</Link>
            </nav> */}
        </header>
    )
}



export default Header