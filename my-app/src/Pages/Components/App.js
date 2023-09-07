// Main
import React from 'react';
import './App.css';

// Components
import Intro from './Intro';
import Navigation from './Navigation';
import FadeInSection from './Fadeinsection';
import FamiliarLanguages from './FamiliarLanguages';
import FamiliarFrameworks from './FamiliarFrameworks';
import Footer from './Footer';
import Banner from './Banner';
import Skills from './Skills';

export default function App() {
  return (
    <>
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
    </>
  );
}
