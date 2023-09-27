import React from 'react';
import intro from './assets/headshot.jpg';

export default function Intro() {
    return (
        <>
            <div className='containerText'>
                <h2 id='hello'>Hello</h2>
                <img id='intro' src={intro} alt='intro image' />

                <p>Welcome to my personal website! My name is Benjamin Trang and I'm an aspiring software engineer and web developer.
                    Currently, I am a senior Computer Information Systems major at James Madison University and will be graduating in the winter of 2023.
                    I'm excited to have you here and share my passion with you. This website is a place for me to
                    showcase my work (including the very site you are on now), share my thoughts on software/web development,
                    and connect with other like-minded individuals. As a programmer, I believe that technology
                    has the power to change the world for the better, and I'm committed to using my skills to make a
                    positive impact in the world. Whether you're a fellow software engineer, a firm checking out my work, or
                    simply curious about me and what I do, I hope you find something here that interests you.
                    Thank you for visiting my site, and I look forward to getting to know you better!
                </p>
            </div>
        </>
    );
}