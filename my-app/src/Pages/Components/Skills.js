import React from "react";
import FadeInSection from "./Fade";

export default function Skills() {
    return (
        <>
            <br />
            <h2 className="languagesTitle">Other Skills & Projects</h2>
            <div className="containerText2">
                <div className='skillsbox'>
                    <h3>Technical Skills</h3>
                    <hr />
                    <FadeInSection>
                        <ul type="none">
                            <li>Process Modeling & Analysis</li>
                            <li>Database Design</li>
                            <li>Defensive Cybersecurity & Security Management</li>
                            <li>DevOps and Server Deployment</li>
                            <li>Cloud Based Architecture</li>
                            <li>Information Systems Design</li>
                            <li>Network & System Analysis</li>
                        </ul>
                    </FadeInSection>
                </div>
                <div className='skillsbox'>
                    <h3>Developed Projects</h3>
                    <hr />
                    <FadeInSection>
                        <ul type="none">
                            <li>Current Website (React/JSX)</li>
                            <li>Database application with GUI & Password Hashing (Java)</li>
                            <li>Event Management System for James Madison University (C#/.NET Core)</li>
                            <li>Job Hazard Analysis Portal (C#/.NET Core)</li>
                            <li>Machining Database for Lighthouse Instruments (C#/.NET Core)</li>
                        </ul>
                    </FadeInSection>
                </div>
            </div>
            <br />
        </>
    );
}