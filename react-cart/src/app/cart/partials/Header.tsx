import React from 'react';

import { Link } from 'react-router-dom';

import logoMobile from '../../../assets/images/mobile/logo.svg';
import cartIcon from '../../../assets/images/mobile/cart.svg';
import userIcon from '../../../assets/images/mobile/user.svg';
import barIcon from '../../../assets/images/mobile/bar.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="header-logo">
            <Link to="/" className="d-flex align-items-center">
              <img
                className="header-image header-image-mobile"
                src={logoMobile}
                alt="logo"
              />
              <span className="header-logo-active">E-</span>SHOP
            </Link>
          </h1>
          <nav className="nav-main">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Kids
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-options">
            <ul className="list-options">
              <li className="option-item">
                <Link className="list-link" to="">
                  <img src={cartIcon} alt="cart" />
                </Link>
              </li>
              <li className="option-item">
                <Link className="list-link" to="">
                  <img src={userIcon} alt="user" />
                </Link>
              </li>
              <li className="option-item">
                <Link className="list-link" to="">
                  <img src={barIcon} alt="bar" />
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
