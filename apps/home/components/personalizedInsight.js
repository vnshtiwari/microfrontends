import React from "react";
import PulseApp from "../assets/pulse-specific.png";
import Image from 'next/image'
import { imageLoader } from "../utility";

const personalizedInsight = () => {
    return (
        <div className="mainInsightContainer">
            <div className="innerInsightContainer">
               
            </div>
            <Image alt="" loader={imageLoader} src={ PulseApp} className={"image"}/>
            <div className="textContainer">
                <p className="textValue">Personalised insights<br/>from Pulse</p>
                <p className="textDesc">Be empowered to better manage your health and community with our AI-powered mobile app.</p>
                <p className="download">Download Now <strong>{"->"}</strong></p>
            </div>
        </div>
    )
}

export default personalizedInsight;