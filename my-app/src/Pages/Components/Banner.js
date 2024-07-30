import React from "react";
import Navigation from './Navigation';
import FadeInSection from "./Fade";

export default function Banner() {
    return (
        <>
            <div className="banner">
                <Navigation />
                <div className="bannertext">
                    <FadeInSection>
                        <h1>B/TCODE</h1>
                        <p>Web Developer & Software Engineer</p>
                    </FadeInSection>
                </div>
                <div class="down-arrow"></div>
            </div>
        </>
    );
}