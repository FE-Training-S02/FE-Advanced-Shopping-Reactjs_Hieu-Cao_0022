import React from 'react';

import { Link } from 'react-router-dom';

import searchIcon from '../../../../../assets/images/icons/option1.svg';
import cartIcon from '../../../../../assets/images/icons/option2.svg';
import loginIcon from '../../../../../assets/images/icons/option3.svg';
import headerLogoMobile from '../../../../../assets/images/mobile/logo.svg';
import cartIconMobile from '../../../../../assets/images/mobile/cart.svg';
import userIconMobile from '../../../../../assets/images/mobile/user.svg';
import barIconMobile from '../../../../../assets/images/mobile/bar.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="header-logo">
            <Link to="/" className="d-flex align-items-center">
              <img className="header-image header-image-mobile" src={headerLogoMobile} alt="logo" />
              <img
                className="header-image"
                src="./images/logo.png"
                alt="logo e-shop"
              />
              E-SHOP
            </Link>
          </h1>
          <nav className="nav-main">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="" className="nav-link" href="">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link" href="">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link" href="">
                  Kids
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-options">
            <ul className="list-options">
              <li className="option-item">
                <Link to="" className="list-link" href="">
                  <img src={searchIcon} alt="search" />
                </Link>
              </li>
              <li className="option-item option-icon-cart">
                <Link to="/cart" className="list-link" href="">
                  <img src={cartIcon} alt="cart" />
                </Link>
              </li>
              <li className="option-item">
                <Link to="" className="list-link" href="">
                  <img src={loginIcon} alt="login" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-options header-options-mobile">
            <ul className="list-options">
              <li className="option-item">
                <Link to="" className="list-link" href="">
                  <img src={userIconMobile} alt="search" />
                </Link>
              </li>
              <li className="option-item">
                <Link to="" className="list-link" href="">
                  <img src={cartIconMobile} alt="cart" />
                </Link>
              </li>
              <li className="option-item">
                <Link to="" className="list-link" href="">
                  <img src={barIconMobile} alt="login" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
