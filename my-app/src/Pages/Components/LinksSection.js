import React from 'react';

export default function LinksSection({ github, email, linkedin }) {
    return (
        <div>
            <h2 id="textalign">Links</h2>
            <div className="containerText">
                <LinkWithImage href="https://github.com/BT-Compile" image={github} alt="github image link">Github</LinkWithImage>
                <LinkWithImage href="mailto:trangbenjamin@gmail.com?Subject=My%20Query" image={email} alt="email logo">Email</LinkWithImage>
                <LinkWithImage href="https://www.linkedin.com/in/benjamin-trang/" image={linkedin} alt="linkedin image link">Linkedin</LinkWithImage>
            </div>
        </div>
    );
}

function LinkWithImage({ href, image, alt, children }) {
    return (
        <div>
            <a href={href}>
                <img src={image} alt={alt} />
            </a>
            <p id="textalign">{children}</p>
        </div>
    );
}
