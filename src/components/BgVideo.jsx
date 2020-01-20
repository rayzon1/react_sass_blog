import React from 'react';
import GoldenGateTraffic from "../img/Golden_Gate_Traffic.mp4"
import GoldenGateTrafficWeb from "../img/Golden_Gate_Traffic.webm"

export default function BgVideo() {
    return (
        <div class="bg-video">
          <video class="bg-video__content" autoPlay muted loop playsInline>
            <source src={GoldenGateTraffic} type="video/mp4" />
            <source src={GoldenGateTrafficWeb} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
    )
}