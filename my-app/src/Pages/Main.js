import React from 'react';
import './Main.css';
import introimage from './assets/headshot.jpg';
import github from './assets/git.png';
import linkedin from './assets/link.png';
import email from './assets/Email.png';
import { Link } from 'react-router-dom';
import Carousel from "nuka-carousel"
import js from './assets/js.png';
import java from './assets/java.png';
import html from './assets/HTML.png';
import sql from './assets/sql.png';
import css from './assets/css.png';
import arrow from './assets/arrow-down.png';

export default function App() {
  return (
    <div id='wrapper'>
      <body>
        <div class="banner">
          <div class="bannertext">
            <h1>Welcome</h1>
          </div>
          <img id='downarrow' src={arrow} alt='arrow' />
        </div>

        <nav className="containerBanner">
          <div id="code" className="square" onMouseOver={() => hover('code')} onMouseOut={() => offhover('code')}>
            <Link to="/code" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <p>Home</p>
            </Link>
          </div>

          <div id="contact" className="square" onMouseOver={() => hover('contact')} onMouseOut={() => offhover('contact')}>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <p>Contact</p>
            </Link>
          </div>

          <div id="about" className="square" onMouseOver={() => hover('about')} onMouseOut={() => offhover('about')}>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <p>About</p>
            </Link>
          </div>
        </nav>

        <FadeInSection>
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
            <Carousel autoplay='true' wrapAround='true' cellAlign='center' slideWidth='20%' scrollMode='page' speed={15000} withoutControls='true'>
              <img src={js} alt='javascript' className='carimg' />
              <img src={java} alt='java' className='carimg' />
              <img src={html} alt='html' className='carimg' />
              <img src={css} alt='css' className='carimg' />
              <img src={sql} alt='sql' className='carimg' />
            </Carousel>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="containerText3">
            <h2 id="headalign">Proficiencies/Skills</h2>
            <br />
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
              <p>JQuery</p>
              <p>React.js</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <h2 id="textalign">Links</h2>
          <div class="containerText">
            <div>
              <a href="https://github.com/BT-Compile"><img id="github" src={github} alt="github image link" /></a>
              <p id="textalign">Github</p>
            </div>

            <div>
              <a href="mailto:trangbenjamin@gmail.com?Subject=My%20Query"><img id="email" src={email} alt="email logo" /></a>
              <p id="textalign">Email</p>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/benjamin-trang/"><img id="linkedin" src={linkedin} alt="linkedin image link" /></a>
              <p id="textalign">Linkedin</p>
            </div>
          </div>
        </FadeInSection>
      </body >

      <FadeInSection>
      <footer>
        <div id='footertxt'>Benjamin Trang &#169; {(new Date().getFullYear())}</div>
      </footer>
      </FadeInSection>

    </div >
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

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}