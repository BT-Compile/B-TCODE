// Main
import React from 'react';
import './Components/App.css';

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';

const About = () => {
    return (
        <>
            <div id='wrapper'>
                <body>
                    <Navigation />
                    <AboutMe />
                </body>
                <Footer />
            </div>
        </>
    );
}

export default About;