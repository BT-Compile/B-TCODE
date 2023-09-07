import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="containerBanner">
            <SquareLink id="code" to="/">Home</SquareLink>
            <SquareLink id="contact" to="/contact">Contact</SquareLink>
            <SquareLink id="about" to="/about">About</SquareLink>
        </nav>
    );
}

function SquareLink({ id, children }) {
    return (
        <div id={id} className="square" onMouseOver={() => hover(id)} onMouseOut={() => offhover(id)}>
                <p>{children}</p>
        </div>
    );
}

function hover(id) {
    document.getElementById(id).style.background = 'white';
    document.getElementById(id).style.color = 'black';
}

function offhover(id) {
    document.getElementById(id).style.background = '';
    document.getElementById(id).style.color = '';
}
