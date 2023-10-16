import React from 'react';
import './App.css';
import art from './assets/art.jpg';
import usn from './assets/usn.jpg';
import hike from './assets/hike.jpg';
import FadeInSection from './Fade';

export default function AboutMe() {
    return (
        <>
            <br />
            <div>
                <FadeInSection>
                    <div className='containerTextAbout'>
                        <img src={art} alt="art" id='art'></img>
                        <h2>About me</h2>
                        <p>
                            Hello! My name is Benjamin Trang (he/him) and I am a aspiring fullstack software engineer. I have just graduated from James
                            Madison University and completed my Bachelors in Business Administration in Computer Information Systems in the winter of 2023.
                            I built my first computer at 13 years old and never looked back.
                            I then fell in love with programming my first year in college, I learned some simple Java and that was that.
                            Im hoping to eventually help build a better world using my code in this exponentially growing age of technology.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className='containerTextAbout'>
                        <img src={usn} alt="usn" id='usn'></img>
                        <h2>Esports</h2>
                        <p>
                            After completing my associates degree and completing my transfer, I took a two year hiatus. I wanted to pursue a
                            personal passion of mine, which was to play video games for money! As my family loves to remind me, I was born with the
                            'competitive gene'. From Counter Strike, Call of Duty, and Halo I grew up always around first person shooters. During my
                            first couple years in college I got noticed in the Tom Clancy's Rainbow Six: Siege community and a year later went
                            professional. I got to play online in Challenger and Professional leagues, as well as two LAN events in Dreamhack Austin 2018
                            and the United States Nationals in Las Vegas. As much as I loved the experience, it killed any social aspects of my life
                            between practicing 6 days a week and constant travel, and I never had any free time for loved ones.
                            Toward the end of 2019, I decided to retire to finish college at JMU and spend more time with my friends and family.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className='containerTextAbout'>
                        <img src={hike} alt="hike" id='hike'></img>
                        <h2>Other Hobbies</h2>
                        <p>
                            I have many interests and hobbies that keep me sane. I love cooking, art, building keyboards, and music. I am one of two, 
                            first generation children of Cantonese immigrants and I grew up in my  family's restaurant and grew up around food. 
                            Typically in Asian cultures food is a sign of love and I do enjoy cooking for my loved ones. Another one of my hobbies 
                            is building keyboards. A few of my best friends got me into building them and now typing with a regular one is like nails 
                            on a chalkboard. Lastly, I really enjoy listening to all types of music. Two of my favorite artists are Kendrick Lamar and Paramore.
                            My partner and I love going to concerts and she is the one that took me to my first. Hopefully some of these resonate with 
                            you and definitely feel free to reach out to me if you wanna chat about these topics!
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className='containerTextAbout'>
                        <div className='finalpara'>
                            <h2>The Purpose</h2>
                            <p>
                                I created this website to get myself out there into the tech world. As I have stated before I think that technology is the best way
                                to make a difference on our planet and society. I want my code to be able to make a positive impact on the the world and
                                hopefully work at a place that shares the same values as myself.
                            </p>
                        </div>
                        <h3 id='ty'>Thanks for reading</h3>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
}

