import React from 'react';
import './App.css';
import karenHero from '../../assets/karenHero.jpg'
import sayKarenLogoWhite from '../../assets/sayKaren_logo-white_8.1.2019.png'

const HeroSection= () => (
      <main
        className="heroSection"
        id="heroImage"
      >        
        <img src={karenHero}
          alt="Karen Garcia"
          id="heroContactPic"
          rel="noopener noreferrer"
        />  
      </main> 
  );

export default HeroSection