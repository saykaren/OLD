import React from 'react';
import './App.css';
import karenHero from '../../assets/karenHero.jpg'


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