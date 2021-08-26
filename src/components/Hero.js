// imports
import React from "react";
import { Link } from "gatsby"
// images
import pic from "../images/profile-pic.jpg";

const Hero = () => {
  return (
    <section className='section-wrap section-hero px-2 py-4'>
        {/* <div className='background-circles'>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='circle-3'></div>
        </div> */}
        <div className='hero-title'>
            <h1 className="mb-3">
                Hi there! <br /> I'm Scott{" "}
                <span role='img' aria-label='peace hand'>👋🏻</span>
            </h1>
        </div>
        <div className='hero-image mb-2'>
            <img src={pic} alt='profile pic'/>
        </div>
        <div className='hero-desc'>
          <p className='mb-3'>
            I am a front end developer. I design websites for makers, creatives,
            and small businesses. I love photography, blockchain, UX/UI, and all
            things code.
          </p>
          <a
              href='https://github.com/scott-wells'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bi bi-github' role="img" aria-label="GitHub"></i>
            </a>
            <a
              href='https://www.linkedin.com/in/scott-wells-1a3119161/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bi bi-linkedin' role="img" aria-label="LinkedIn"></i>
            </a>
            <a
              href='mailto:scott.wells.developer@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bi bi-linkedin' role="img" aria-label="Email"></i>
            </a>
        </div>
    </section>
  );
};

export default Hero;
