import React from 'react';
import './App.css';
import karenHero from '../../assets/karenHero.jpg'
import sayKarenLogo from '../../assets/sayKaren_Logo_transparent_7.2019.png'

const HeroSection= () => (
    <div>
      <main
        className="heroSection"
        id="heroImage"
      >     

   
        <h1
        id="heroText"
        >
          Karen Garcia
          <section id="heroTitle">
            Front End Developer
          </section>
        </h1>
        <img src={karenHero}
          alt="Karen Garcia"
          id="heroContactPic"
          rel="noopener noreferrer"
        />  

        <section className="icons">
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-codepen"></i>
        </section>

        <section id="stateLogo">
        <img src={sayKarenLogo}
              className="footerDetails"
              id="sayKarenLogoFrontPage"
              alt="sayKaren.com"
        />
        <div id="stateChange">
          ... Build a website
        </div>
        </section>

        {/* <h3 id="buttonSignUp">
          <a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" 
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            id="buttonMain"
          >
            IQ Testing Schedule
          </a>
        </h3> */}
      </main> 
    </div> 
  );

export default HeroSection