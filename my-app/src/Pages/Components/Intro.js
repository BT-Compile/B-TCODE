import React from 'react';
import introimage from './assets/headshot.jpg';

export default function Intro() {
    return (
        <>
            <h2 id='hello'>Hello!</h2>
            <div className='containerText'>
                <div id='intropara'>
                    <p>Welcome to my personal website! My name is Benjamin Trang and I'm an aspiring software engineer.
                        Currently, I am a senior at James Madison University and will be graduating in the fall of 2023.
                        I'm excited to have you here and share my passion with you. This website is a place for me to
                        showcase my work (including the very site you are on now, created in react), share my thoughts on software development,
                        and connect with other like-minded individuals. As a software engineer, I believe that technology
                        has the power to change the world for the better, and I'm committed to using my skills to make a
                        positive impact. Whether you're a fellow software engineer, a firm checking out my work, or
                        simply curious about me and what I do, I hope you find something here that interests you.
                        Thank you for visiting my site, and I look forward to getting to know you better!
                        As a software engineer, I can see the power within technology to make a positive impact on the world,
                        and am committed to using my skills to contribute toward this goal.
                    </p>
                </div>

                <img id='introimage' src={introimage} alt='intro image' />
            </div>
        </>
    );
}