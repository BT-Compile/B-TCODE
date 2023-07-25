// Main
import React from 'react';
import './Pages/Components/App.css';

// Components
import Intro from './Pages/Components/Intro';
import Navigation from './Pages/Components/Navigation';
import FadeInSection from './Pages/Components/Fadeinsection';
import FamiliarLanguages from './Pages/Components/FamiliarLanguages';
import Footer from './Pages/Components/Footer';
import Banner from './Pages/Components/Banner';
import Skills from './Pages/Components/Skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';

export default function App() {
  return (
    <>
      <div id='wrapper'>
        <body>
          <Banner />

          <BrowserRouter>
            <Navigation />

            <Routes>
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </BrowserRouter>

          <FadeInSection>
            <Intro />
          </FadeInSection>

          <FadeInSection>
            <FamiliarLanguages />
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
