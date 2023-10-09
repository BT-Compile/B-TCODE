// Main
import React from 'react';
import './Components/App.css';

// Components
import Intro from './Components/Intro';
import Navigation from './Components/Navigation';
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

        <Navigation />

        <FadeInSection>
          <Intro />
        </FadeInSection>

        <FadeInSection>
          <FamiliarLanguages />
        </FadeInSection>

        <FadeInSection>
          <FamiliarFrameworks />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>
      </body>

      <Footer />
    </div>
  );
}
