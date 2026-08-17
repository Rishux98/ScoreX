import React from 'react';
import './App.css';
import bgImg from './assets/Thumbnail.png'; 
import mockup1 from './assets/mockup-1.png'; 
import mockup2 from './assets/mockup-2.png'; 
import group3231 from './assets/Group 3231.png'; 
import group3234 from './assets/Group 3234.png';
import standingsScreen from './assets/Standings Screen.png'; 

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* 1. Base Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="bg-image"
      />


      <div className="belt-track-wrapper track-col-1">
        <div className="belt-track-inner anim-col-1">
          
          <img src={mockup2} alt="Mbappe Discover Card" className="card-img card-mbappe" />
          <img src={group3231} alt="What sport do you interest" className="card-img card-what-sport" />
         
          <img src={mockup2} alt="Mbappe Discover Card" className="card-img card-mbappe" />
          <img src={group3231} alt="What sport do you interest" className="card-img card-what-sport" />
        </div>
      </div>

    
      <div className="belt-track-wrapper track-col-2">
        <div className="belt-track-inner anim-col-2">
    
          <img src={standingsScreen} alt="Standings" className="card-img card-standings" />
          <img src={mockup1} alt="LiveScore App" className="card-img card-livescore" />
          <img src={group3234} alt="Match Detail" className="card-img card-match-detail" />
          
          <img src={standingsScreen} alt="Standings" className="card-img card-standings" />
          <img src={mockup1} alt="LiveScore App" className="card-img card-livescore" />
          <img src={group3234} alt="Match Detail" className="card-img card-match-detail" />
        </div>
      </div>
    </div>
  );
}