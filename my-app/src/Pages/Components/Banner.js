import React from "react";
import Navigation from './Navigation';

export default function Banner() {
    return (
        <>
            <div className="banner">
                <Navigation />
                <div className="bannertext">
                    <h1>B/TCODE</h1>
                    <p>Web Developer & Software Engineering</p>
                </div>
                <div class="down-arrow"></div>
            </div>
        </>
    );
}