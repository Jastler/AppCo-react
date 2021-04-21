import React from 'react';

export const MainPageFooter = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="footer__form">
        <form className="from" action="#">
          <input
            className="form__input"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button
            className="form__submit"
            type="submit"
            placeholder="Subscribe"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer__info">
        <div className="footer__logo">
          <span>
            AppCo
          </span>
        </div>
        <a className="footer__copyright" href="/">
          All rights reserved by ThemeTags 
        </a>
        <p className="footer__copyright">
          Copyrights © 2019. 
        </p>
      </div>
    </div>
  </footer>
);
