// Main
import React from 'react';
import './Components/App.css';

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import LinksSection from './Components/LinksSection';
import FadeInSection from './Components/Fade';

const Contact = () => {
    return (
        <>
            <div id='wrapper'>
                <body>
                    <Navigation />
                    <LinksSection />
                </body>
                <br />
                <br />
                <br />
                <div className='spacer'></div>
                <Footer />
            </div>
        </>
    );
}

export default Contact;