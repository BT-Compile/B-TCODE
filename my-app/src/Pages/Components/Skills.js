import React from "react";

export default function Skills() {
    return (
        <>
            <br />
            <h2 className="languagesTitle">Other Skills & Projects</h2>
            <div className="containerText2">
                <div className='skillsbox'>
                    <h3>- Information Technology Skills -</h3>
                    <ul type="none">
                        <li>Business Process Modeling & Analysis</li>
                        <li>Familiarity with Cloud Based Architecture</li>
                        <li>Network & System Analysis</li>
                        <li>Database Design</li>
                        <li>Defensive Cybersecurity & Security Management</li>
                        <li>Information Systems Design</li>
                    </ul>
                </div>

                <div className='skillsbox'>
                    <h3>- Projects -</h3>
                    <ul type="none">
                        <li>Event Management System for JMU (C#/Razor pages)</li>
                        <li>Database with GUI & Password Hashing (Java)</li>
                        <li>This Website (React/JSX/HTML/CSS)</li>
                        <li>JMU College of Business Plan</li>
                    </ul>
                </div>
            </div>
            <br />
            <footer>
                <p className='footerMain'>- Benjamin Trang, {new Date().getFullYear()} &#169; -</p>
            </footer>
        </>
    );
}