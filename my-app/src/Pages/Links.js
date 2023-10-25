// Main
import React from 'react';
import './Components/App.css';

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import LinksSection from './Components/LinksSection';

const Links = () => {
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
                <br />
                <Footer />
            </div>
        </>
    );
}

export default Links;