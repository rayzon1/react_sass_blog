import React from 'react';
// import GoldenGateTraffic from "../img/Golden_Gate_Traffic.mp4"
// import GoldenGateTrafficWeb from "../img/Golden_Gate_Traffic.webm"
import SfBackground2 from "../img/sf-background2.jpg";

export default function BgVideo() {
    return (
        <div class="bg-video">
          {/* <video class="bg-video__content" autoPlay muted loop playsInline>
            <source src={GoldenGateTraffic} type="video/mp4" />
            <source src={GoldenGateTrafficWeb} type="video/webm" />
            Your browser is not supported!
          </video> */}
          <div className="bg-video__content">
            <img src={SfBackground2} alt="Golden gate view" className="bg-video__image"/>
          </div>
        </div>
    )
}