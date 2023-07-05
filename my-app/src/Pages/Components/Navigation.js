import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="containerBanner">
            <SquareLink id="code" to="/code">Home</SquareLink>
            <SquareLink id="contact" to="/contact">Contact</SquareLink>
            <SquareLink id="about" to="/about">About</SquareLink>
        </nav>
    );
}

function SquareLink({ id, to, children }) {
    return (
        <div id={id} className="square" onMouseOver={() => hover(id)} onMouseOut={() => offhover(id)}>
            <Link to={to} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <p>{children}</p>
            </Link>
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
