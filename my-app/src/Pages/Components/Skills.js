import React from "react";
import FadeInSection from "./Fade";

export default function Skills() {
    return (
        <>

            <br />
            <h2 className="languagesTitle">Other Skills & Projects</h2>
            <div className="containerText2">
                <div className='skillsbox'>
                    <h3>Information Technology Skills</h3>
                    <hr />
                    <FadeInSection>
                        <ul type="none">
                            <li>Business Process Modeling & Analysis</li>
                            <li>Database Design</li>
                            <li>Defensive Cybersecurity & Security Management</li>
                            <li>Familiarity with Cloud Based Architecture</li>
                            <li>Information Systems Design</li>
                            <li>Network & System Analysis</li>
                        </ul>
                    </FadeInSection>
                </div>
                <div className='skillsbox'>

                    <h3>Projects</h3>
                    <hr />
                    <FadeInSection>
                        <ul type="none">
                            <li>Database with GUI & Password Hashing (Java)</li>
                            <li>Event Management System for JMU (C#/Razor pages)</li>
                            <li>JMU College of Business Plan</li>
                            <li>Job Hazard Analysis Portal (C#/Razor pages)</li>
                            <li>Machining Database for Lighthouse Instruments (C#/Razor pages)</li>
                            <li>This Website (React/JSX/HTML/CSS)</li>
                        </ul>
                    </FadeInSection>
                </div>
            </div>
            <br />
        </>
    );
}