import React from 'react';

import { Link } from 'react-router-dom';

import arrowBanner from '../../../assets/images/icons/arrow.svg';
import serviceShipping from '../../../assets/images/icons/services1.svg';
import serviceSatisfied from '../../../assets/images/icons/services2.svg';
import serviceOriginality from '../../../assets/images/icons/services3.svg';

const Banner = () => {
  return (
    <section className="section-banner">
      <div className="banner-content">
        <h2 className="banner-title">
          <p className="title-content">Sale of the</p>
          <p className="text-primary">summer</p>
          <p className="title-content">collection</p>
        </h2>
        <Link to="" className="banner-button">
          <span className="banner-button-icon">
            <img src={arrowBanner} alt="arrow banner" />
          </span>
          SHOP NOW
        </Link>
      </div>

      <div className="section-services">
        <ul className="list-services">
          <li className="service-item">
            <img
              className="service-icon"
              src={serviceShipping}
              alt="Free Shipping"
            />
            <div className="service-content">
              <h5 className="service-title">Free Shipping</h5>
              <span className="service-description">
                On purchases over $199
              </span>
            </div>
          </li>
          <li className="service-item">
            <img
              className="service-icon"
              src={serviceSatisfied}
              alt="99% Satisfied Customers"
            />
            <div className="service-content">
              <h5 className="service-title">99% Satisfied Customers</h5>
              <span className="service-description">
                Our clients' opinions speak for themselves
              </span>
            </div>
          </li>
          <li className="service-item">
            <img
              className="service-icon"
              src={serviceOriginality}
              alt="Originality Guaranteed"
            />
            <div className="service-content">
              <h5 className="service-title">Originality Guaranteed</h5>
              <span className="service-description">
                30 days warranty for each product from our store
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
