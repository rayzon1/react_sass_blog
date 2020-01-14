import React from 'react';

export default function Header() {


    return (
        <header className="header">
          <h1 className="header__primary">
            <div className="header__container u-margin-bottom-md">
              <div className="icon-box">
                <img src="#" alt="" className="profile-icon" />
              </div>
              <span className="header__title-main">This is the main title.</span>
              <span className="header__title-sub">This is a sub heading.</span>
            </div>
          </h1>
        </header>
    )
}