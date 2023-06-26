import React from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import introimage from './assets/headshot.jpg';
import github from './assets/git.png';
import linkedin from './assets/link.png';

export default function App() {
  return (
    <div id='wrapper'>
      <body>
        <div class="banner">
          <div class="bannertext">
            <h1>Welcome</h1>
          </div>
        </div>

        <div class="containerBanner">
          <div id="code" className="square" onMouseOver={() => hover('code')} onMouseOut={() => offhover('code')}>
            <p id="pagetitle">Code</p>
          </div>

          <div id="contact" class="square" onMouseOver={() => hover('contact')} onMouseOut={() => offhover('contact')}>
            <p>Contact</p>
          </div>

          <div id="about" class="square" onMouseOver={() => hover('about')} onMouseOut={() => offhover('about')}>
            <p>About</p>
          </div>
        </div>

        <div className='containerText'>
          <div id="blockLeft">
            <h2>Hello!</h2>
            <p>Welcome to my personal website! My name is Benjamin Trang and I'm an aspiring software engineer.
              Currently I am a senior at James Madison University and will be graduating in the fall of 2023.
              I'm excited to have you here and share my passion with you. This website is a place for me to
              showcase my work (including the very site you are on now), share my thoughts on software development,
              and connect with other like-minded individuals. As a software engineer, I believe that technology
              has the power to change the world for the better, and I'm committed to using my skills to make a
              positive impact. Whether you're a fellow software engineer, a firm checking out my work, or
              simply curious about me and what I do, I hope you find something here that interests you.
              Thank you for visiting my site, and I look forward to getting to know you better!
              As a software engineer, I believe in the power of technology to make a positive impact on the world,
              and am committed to using my skills to contribute to this goal.
            </p>
          </div>

          <div id="blockRight">
            <img id='introimage' src={introimage} alt='intro image' />
          </div>
        </div>

        <div className='containerText2'>

        </div>

        <div className="containerText3">
          <h2 id="headalign">Proficiencies/Skills</h2>
          <br />
          <div id="skills1">
            <h3>Spoken Languages</h3>
            <p>English</p>
            <p>Cantonese</p>
          </div>
          <div id="skills2">
            <h3>Information Technology Skills</h3>
            <p>System Analysis</p>
            <p>Cloud Based Architecture</p>
            <p>Network Analysis</p>
            <p>Database Design</p>
            <p>Business Process Modeling and Analysis</p>
          </div>
          <div id="skills3">
            <h3>Platforms and Frameworks</h3>
            <p>AWS</p>
            <p>Azure</p>
            <p>Node.js</p>
            <p>JQuery</p>
            <p>React</p>
          </div>
        </div>

        <h2 id="textalign">Links</h2>
        <div class="containerText">
          <div>
            <a href="https://github.com/BT-Compile"><img id="github" src={github} alt="github image link" /></a>
            <p id="textalign">Github</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/benjamin-trang/"><img id="linkedin" src={linkedin} alt="linkedin image link" /></a>
            <p id="textalign">Linkedin</p>
          </div>
        </div>
      </body>

      <footer>
        <div id='footertxt'>Benjamin Trang &#169; {(new Date().getFullYear())}</div>
      </footer>

    </div>
  )
}

function hover(id) {
  document.getElementById(id).style.background = 'white';
  document.getElementById(id).style.color = 'black';
}

function offhover(id) {
  document.getElementById(id).style.background = '';
  document.getElementById(id).style.color = '';
}