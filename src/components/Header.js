// Imports
import * as React from "react"
import { Link } from "gatsby"
//images
import logo from "../images/pixel-scott.png";


// State Functions


// Render
const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='logo'>
                    <div className="logo-image">
                        <img src={logo} alt='logo' />
                    </div>
                    <span className="h0">Scott Wells</span>
                </div>
            </Link>

            <nav className='nav-links'>
                <Link to='/#02'>Work</Link>
                <Link to='/#'>Blog</Link>
                <Link to='/#03'>About</Link>
                <Link to='/#04'>Contact</Link>
            </nav>
        </header>
    )
}



export default Header