import React from 'react';
import BgVideo from './BgVideo';
import GoldenGateBridgeIcon from '../img/sf-icon-1.png'
import ProfilePic1 from '../img/profile-pic-1.png'

export default function Header() {

    //TODO: CREATE SEPERATE COMPONENT FOR GOLDEN GATE BRIDGE ICON
    return (
        <header className="header">
          
          <h1 className="header__primary">
            <BgVideo />
            <div className="header__container u-margin-bottom-md">

            
            {/* <div className="sf-icon-box">
                <img src={GoldenGateBridgeIcon} alt="" className="sf-icon-box__icon" />
              </div> */}
            
              <div className="icon-box">
                <img src={ProfilePic1} alt="" className="icon-box__icon" />
              </div>
              <span className="header__title-main">Gerardo Keys</span>
              <span className="header__title-sub">Coder Designer Creator</span>
            </div>
          </h1>
        </header>
    )
}