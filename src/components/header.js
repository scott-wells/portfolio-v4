import React from 'react'
import styled from "styled-components"
//components
import Navbar from "../components/navbar";
import Hero from "../components/hero";
//image
import bgImageVertical from '../images/desert_vert_xl_02.jpg'
import bgImageHorizontal from '../images/desert_xl.jpg'

const Container = styled.div`
    --color: #220900;
    .section-hero {
        background: url(${bgImageVertical}) no-repeat center;
        background-size: cover;
        height: 100vh;
        text-align: center;
        border-bottom: 10px solid var(--color);
    }
    @media (min-width: 576px) {
        .section-hero { 
            background: url(${bgImageHorizontal})no-repeat center; 
            background-size: cover;
        }
    }
`

const Header = () => {
    return(
        <Container>
            <section className='section-hero'>
                <Navbar></Navbar>
                <Hero></Hero>
            </section>
        </Container>
        
    )
}

export default Header