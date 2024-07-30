import React from 'react';
import Carousel from "nuka-carousel";
import aws from './assets/AWS.png';
import azure from './assets/azure.png';
import bootstrap from './assets/bootstrap.png';
import jquery from './assets/jquery.png';
import react from './assets/react.png';
import netcore from './assets/netcore.png';
import FadeInSection from './Fade';

export default function FamiliarFrameworks() {
    return (
        <>
            <FadeInSection>
                <br />
                <h2 className="languagesTitle">Familiar Frameworks & Platforms</h2>
                <hr />
                <Carousel autoplay wrapAround withoutControls slideWidth="20%" speed={15000} scrollMode='remainder'>
                    <img src={aws} alt="aws" className="carimg" />
                    <img src={azure} alt="azure" className="carimg" />
                    <img src={jquery} alt="jquery" className="carimg" />
                    <img src={react} alt="react" className="carimg" />
                    <img src={netcore} alt="netcore" className="carimg" />
                    <img src={bootstrap} alt="bootstrap" className="carimg" />
                </Carousel>
                <br />
                <br />
            </FadeInSection>
        </>
    );
}
