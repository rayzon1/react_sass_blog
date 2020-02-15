import React from "react";
// import GoldenGateTraffic from "../img/Golden_Gate_Traffic.mp4"
// import GoldenGateTrafficWeb from "../img/Golden_Gate_Traffic.webm"
import SfBackground2 from "../img/sf-background2.jpg";

export default function BgVideo() {
  return (
    <>
      <div class="bg-video">
        <div className="bg-video__content">
          <img
            src={SfBackground2}
            alt="Golden gate view"
            className="bg-video__image"
          />
        </div>
      </div>
      <div className="bg-cover" />
    </>
  );
}
