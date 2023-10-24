import React from 'react';
import introimage from './assets/headshot.jpg';

export default function Intro() {
    return (
        <>
            <div className='containerTextIntro'>
                <h2>Hello</h2>
                <img id='introimage' src={introimage} alt='intro image' />
                <div>
                    <p>Welcome to my personal website! My name is Benjamin Trang and I'm an aspiring software engineer and web developer.
                        I have just graduated as a senior Computer Information Systems major from James Madison University.
                        I'm excited to have you here and share my passion with you. This website is a place for me to
                        showcase my work (including the very site you are on now), share my thoughts on development,
                        and connect with other like-minded individuals. As a programmer, I believe that technology
                        has the power to change the world for the better, and I'm committed to using my skills to make a
                        positive impact in the world.
                    </p>
                </div>
            </div>  
        </>
    );
}