import React from 'react';
import FadeInSection from "./Fade";

export default function Footer() {
  return (
    <FadeInSection>
      <footer>
        <p className='footerMain'>- Benjamin Trang, {new Date().getFullYear()} &#169; -</p>
      </footer>
    </FadeInSection>
  );
}
