import React from 'react';

import { Link } from 'react-router-dom';

import facebookIcon from '../../../../../assets/images/icons/facebook.svg';
import twitterIcon from '../../../../../assets/images/icons/twitter.svg';
import instagramIcon from '../../../../../assets/images/icons/instagram.svg';
import LinkedInIcon from '../../../../../assets/images/icons/LinkedIn.svg';
import youtubeIcon from '../../../../../assets/images/icons/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-12">
              <div className="about-us">
                <div className="footer-logo">
                  <img
                    className="footer-image"
                    src="./images/logo.png"
                    alt="logo e-shop"
                  />
                  <h3 className="footer-title">E-Shop</h3>
                </div>
                <p className="about-us-description">
                  House My Brand designs clothing for the young, the old &
                  everyone in between – but most importantly, for the
                  fashionable
                </p>

                <ul className="list-media">
                  <li className="media-item">
                    <Link className="media-item-link" to="">
                      <img src={facebookIcon} alt="facebook" />
                    </Link>
                  </li>
                  <li className="media-item">
                    <Link className="media-item-link" to="">
                      <img src={twitterIcon} alt="twitter" />
                    </Link>
                  </li>
                  <li className="media-item">
                    <Link className="media-item-link" to="">
                      <img src={instagramIcon} alt="instagram" />
                    </Link>
                  </li>
                  <li className="media-item">
                    <Link className="media-item-link" to="">
                      <img src={LinkedInIcon} alt="LinkedIn" />
                    </Link>
                  </li>
                  <li className="media-item">
                    <Link className="media-item-link" to="">
                      <img src={youtubeIcon} alt="youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-12">
              <ul className="list-info">
                <li className="info-item">
                  <h4 className="title">Shopping online</h4>
                  <ul className="list-subinfo">
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        Order Status
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Shipping and Delivery{' '}
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Returns
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Payment Options{' '}
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="info-item">
                  <h4 className="title">Information</h4>
                  <ul className="list-subinfo">
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        Gift Cards
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Find a store{' '}
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Newsletter
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Bacome a member{' '}
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        {' '}
                        Site feedback
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="info-item">
                  <h4 className="title">Contact</h4>
                  <ul className="list-subinfo">
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        store@uikit.com
                      </Link>
                    </li>
                    <li className="subinfo-item">
                      <Link className="subinfo-link" to="">
                        Hotline: +1 131 138 138
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="content">
          DESIGN BY ICEO.CO - &#169 2019. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
