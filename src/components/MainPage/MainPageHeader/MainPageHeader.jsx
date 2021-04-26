import React from 'react';
import image from '../../../images/mobile.png';
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <div className="wrapper">
      <div className="header__logo">
        <span>
          AppCo
        </span>
      </div>
      <div className="header__info">
        <div className="header__left">
          <h1 className="header__title">
            <span className="header__title_bold">Brainstorming</span> for
            <br />
            desired perfect Usability
          </h1>
          <p className="header__text">
            Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
          </p>
          <Link className="header__link" to="/stats">
            Views Stats
          </Link>
        </div>
        <div className="header__right">
          <img src={image} alt="mobile"/>
        </div>
      </div>
    </div>
  </header>
);
