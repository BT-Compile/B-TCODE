import React from "react";

export default function Skills() {
    return (
        <>
            <h2 className="headalign">Skills and Projects</h2>

            <div className="containerText3">

            <div className='skillsbox'>
                    <h3>Information Technology Skills</h3>
                    <p>&#x2022; Business Process Modeling and Analysis</p>
                    <p>&#x2022; Cloud Based Architecture</p>
                    <p>&#x2022; Network & System Analysis</p>
                    <p>&#x2022; Database Design</p>
                    <p>&#x2022; Defensive Cybersecurity & Security Management</p>
                </div>

                <div className='skillsbox'>
                    <h3>Projects</h3>
                    <p>&#x2022; Small Database with GUI and password hashing (Java)</p>
                    <p>&#x2022; Discord greeter bot (JavaScript)</p>
                    <p>&#x2022; This website! (React.js)</p>
                    <p>&#x2022; Full Information System with JMU partnered firm (C#/Razor pages)</p>
                </div>
            </div>
        </>
    );
}