// Main
import React from "react";
import './Components/App.css';

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const About = () => {
    return (
        <>
            <div id='wrapper'>
                <body>
                    <Navigation />
                </body>

                <Footer />
            </div>
        </>
    );
}

export default About;