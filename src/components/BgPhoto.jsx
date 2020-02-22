import React from "react";
import SfBackground2 from "../img/sf-background2.jpg";

export default function BgPhoto() {
  return (
    <>
      <div className="bg-photo">
        <div className="bg-photo__content">
          <img
            src={SfBackground2}
            alt="Golden gate view"
            className="bg-photo__image"
          />
        </div>
      </div>
      <div className="bg-cover" />
    </>
  );
}
