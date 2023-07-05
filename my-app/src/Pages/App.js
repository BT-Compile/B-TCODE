// Main
import React from 'react';
import './Components/App.css';

// Images
import introimage from './assets/headshot.jpg';
import arrow from './assets/arrow-down.png';

// Components
import Navigation from './Components/Navigation';
import FadeInSection from './Components/Fadeinsection';
import FamiliarLanguages from './Components/FamiliarLanguages';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div id='wrapper'>
      <body>

        <div className="banner">

          <div className="bannertext">
            <h1>HOME</h1>
          </div>

          <img id='downarrow' src={arrow} alt='arrow' />

        </div>

        <Navigation />

        <FadeInSection>
          <div className='containerText'>

            <div id="blockLeft">
              <h2>Hello!</h2>
              <p>Welcome to my personal website! My name is Benjamin Trang and I'm an aspiring software engineer.
                Currently, I am a senior at James Madison University and will be graduating in the fall of 2023.
                I'm excited to have you here and share my passion with you. This website is a place for me to
                showcase my work (including the very site you are on now, created in react), share my thoughts on software development,
                and connect with other like-minded individuals. As a software engineer, I believe that technology
                has the power to change the world for the better, and I'm committed to using my skills to make a
                positive impact. Whether you're a fellow software engineer, a firm checking out my work, or
                simply curious about me and what I do, I hope you find something here that interests you.
                Thank you for visiting my site, and I look forward to getting to know you better!
                As a software engineer, I can see the power within technology to make a positive impact on the world,
                and am committed to using my skills to contribute toward this goal.
              </p>
            </div>

            <div id="blockRight">
              <img id='introimage' src={introimage} alt='intro image' />
            </div>

          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='containerText2'>

            <h2 id="languagesTitle">Familiar Languages</h2>

            <FamiliarLanguages />

          </div>
        </FadeInSection>

        <FadeInSection>
          <h2 className="headalign">Proficiencies / Skills</h2>

          <div className="containerText3">

            <div className='skillsbox'>
              <h3>Spoken Languages</h3>
              <p>&#x2022; English</p>
              <p>&#x2022; Cantonese</p>
            </div>
            <div className='skillsbox'>
              <h3>Information Technology Skills</h3>
              <p>&#x2022; System Analysis</p>
              <p>&#x2022; Cloud Based Architecture</p>
              <p>&#x2022; Network Analysis</p>
              <p>&#x2022; Database Design</p>
              <p>&#x2022; Business Process Modeling and Analysis</p>
            </div>
            <div className='skillsbox'>
              <h3>Platforms and Frameworks</h3>
              <p>&#x2022; AWS</p>
              <p>&#x2022; Azure</p>
              <p>&#x2022; JQuery</p>
              <p>&#x2022; React / JSX</p>
            </div>

          </div>
        </FadeInSection>

      </body>

      <Footer />
    </div>
  );
}
