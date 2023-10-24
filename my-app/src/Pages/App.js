// Main
import React from 'react';
import './Components/App.css';

// Components
import Intro from './Components/Intro';
import FamiliarLanguages from './Components/FamiliarLanguages';
import FamiliarFrameworks from './Components/FamiliarFrameworks';
import Banner from './Components/Banner';
import Skills from './Components/Skills';

export default function App() {
  return (
    <div id='wrapper'>
      <body>
        <Banner />
        <Intro />
        <div className='carContainer'>
          <FamiliarLanguages />
          <FamiliarFrameworks />
        </div>
        <div className='skillsContainer'>
          <Skills />
        </div>
      </body>
    </div>
  );
}
