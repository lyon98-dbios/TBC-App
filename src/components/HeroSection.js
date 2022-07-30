import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EXPERIENCE THE BEACON CENTRE</h1>
      <p>Raising shining lights...</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET INVOLVED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH SERMONS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
