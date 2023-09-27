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

export default function App() {
  return (
    <div id='wrapper'>
      <body>
        <Banner />

        <Navigation />

        <Intro />

        <FamiliarLanguages />

        <FamiliarFrameworks />

        <Skills />

      </body>

      <Footer />
    </div>
  );
}
