// Main
import React from 'react';
import './Components/App.css';

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import LinksSection from './Components/LinksSection';

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
                <div className='spacer'></div>
                <Footer />
            </div>
        </>
    );
}

export default Contact;