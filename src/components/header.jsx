import React from 'react';
import BgVideo from './BgVideo';
import UserIcon2 from '../img/user-icon-demo-2.png'

export default function Header() {


    return (
        <header className="header">
          
          <h1 className="header__primary">
            <BgVideo />
            <div className="header__container u-margin-bottom-md">
            
              <div className="icon-box">
                <img src={UserIcon2} alt="" className="icon-box__icon" />
              </div>
              <span className="header__title-main">Gerardo Keys.</span>
              <span className="header__title-sub">Coder Designer Content Creator</span>
            </div>
          </h1>
        </header>
    )
}