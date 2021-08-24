// Imports
import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
//images
import logo from "../images/pixel-scott.png";


// Component Styles
const Container = styled.div`
    .section-wrap {
        width: 90vw;
    }
    .header {
        font-family: "Montserrat", sans-serif;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            cursor: pointer;
            margin-right: -6rem;
            display: flex;
            align-items: center;
            img {
                max-width: 15%;
            }
            h1 {
                ${'' /* display: none; */}
            }
        }
        .nav-links {
            ul {
            li {
                font-size: 0.9rem;
                list-style: none;
                display: inline-block;
                cursor: pointer;
                a {
                text-decoration: none;
                }
                a:link,
                a:visited {
                @include buttonPill;
                background: none;
                color: $greydark;
                }
                a:hover,
                a:active {
                @include buttonPill;
                color: $greydark;
                }
            }
            }
        }
        }
    @media (max-width: $phone) {
        
        .header {
            
            .logo {
            
            
            }
            .nav-links {
            ul {
                li {
                
                }
            }
            }
        }
    }
`

// State Functions


// Render
const Header = () => {
    return (
        <Container>
            <header className='header'>
                <Link to='/'>
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                        <h1>Scott Wells</h1>
                    </div>
                </Link>

                <nav className='nav-links'>
                    <ul>
                        <li>
                        <Link to='/#02'>Work</Link>
                        </li>

                        {/* <li>
                            <a href='#' target='_self'>
                            Blog
                            </a>
                        </li> */}

                        <li>
                        <Link to='/#03'>About</Link>
                        </li>

                        <li>
                        <Link to='/#04'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Container> 
    )
}



export default Header