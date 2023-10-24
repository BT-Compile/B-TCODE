// Main
import React from 'react';
import './Components/App.css';

// Components
import Intro from './Components/Intro';
import FamiliarLanguages from './Components/FamiliarLanguages';
import FamiliarFrameworks from './Components/FamiliarFrameworks';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import FadeInSection from './Components/Fade';

export default function App() {
  return (
    <div id='wrapper'>
      <body>
        <Banner />

        <FadeInSection>
          <Intro />
        </FadeInSection>

        <div className='carContainer'>
          <FadeInSection>
            <FamiliarLanguages />
          </FadeInSection>

          <FadeInSection>
            <FamiliarFrameworks />
          </FadeInSection>
        </div>

        <div className='skillsContainer'>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        </div>
      </body>
    </div>
  );
}
