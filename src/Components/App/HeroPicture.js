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
          <a 
            href="https://www.linkedin.com/in/karen-garcia-05842642/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="socialLinks"
          >
            <i 
              className="fab fa-linkedin-in" 
              id="linkedIn"
            >
            </i>
          </a>
          
          <a 
            href="https://github.com/saykaren/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="socialLinks">
            <i 
              className="fab fa-github"
            >
            </i>
          </a>
          
          <a 
            href="https://codepen.io/saykaren/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="socialLinks"
          >
            <i 
              className="fab fa-codepen"
            >
            </i>
          </a>
        </section>

        <section id="stateLogo">
        <img src={sayKarenLogo}
              className="footerDetails"
              id="sayKarenLogoFrontPage"
              alt="sayKaren.com"
        />
        <div 
          id="stateChange"
        >
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