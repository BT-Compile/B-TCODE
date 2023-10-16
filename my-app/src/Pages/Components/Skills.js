import React from "react";

export default function Skills() {
    return (
        <>
            <h2 className="headalign">Other Skills & Projects</h2>
            <div className="containerText2">
                <div className='skillsbox'>
                    <h3>Information Technology Skills</h3>
                    <ul type="none">
                        <li>Business Process Modeling & Analysis</li>
                        <li>Cloud Based Architecture</li>
                        <li>Network & System Analysis</li>
                        <li>Database Design</li>
                        <li>Defensive Cybersecurity & Security Management</li>
                        <li>Information Systems Design</li>
                    </ul>
                </div>

                <div className='skillsbox'>
                    <h3>Projects</h3>
                    <ul type="none">
                        <li>Information System with JMU partnered firm (C#/Razor pages)</li>
                        <li>Database with GUI & password hashing (Java)</li>
                        <li>This website (React/JSX/HTML/CSS)</li>
                        <li>JMU College of Business Plan</li>
                    </ul>
                </div>
            </div>
        </>
    );
}