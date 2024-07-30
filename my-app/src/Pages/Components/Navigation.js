import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="navContainer">
            <SquareLink id="Home" to="/">Home</SquareLink>
            <SquareLink id="Links" to="/Links">Links</SquareLink>
            <SquareLink id="About" to="/About">About</SquareLink>
        </nav>
    );
}

function SquareLink({ id, children }) {
    return (
        <Link to={`/${id}`} className="square hover-underline-animation" onMouseOver={() => hover(id)} onMouseOut={() => offhover(id)} onTouchStart={() => hover(id)} onTouchEnd={() => offhover(id)}>
            <div id={id} className="square">
                <p>{children}</p>
            </div>
        </Link>
    );
}

function hover(id) {
    document.getElementById(id).style.color = 'aquamarine';
}

function offhover(id) {
    document.getElementById(id).style.color = '';
}
