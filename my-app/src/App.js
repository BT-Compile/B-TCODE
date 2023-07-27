// Main
import React from 'react';
import './Pages/Components/App.css';

// Components
import Intro from './Pages/Components/Intro';
import Navigation from './Pages/Components/Navigation';
import FadeInSection from './Pages/Components/Fadeinsection';
import FamiliarLanguages from './Pages/Components/FamiliarLanguages';
import FamiliarFrameworks from './Pages/Components/FamiliarFrameworks';
import Footer from './Pages/Components/Footer';
import Banner from './Pages/Components/Banner';
import Skills from './Pages/Components/Skills';

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
