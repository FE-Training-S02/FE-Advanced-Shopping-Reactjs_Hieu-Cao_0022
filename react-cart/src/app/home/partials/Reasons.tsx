import React from 'react';

import reasonIcon1 from '../../../assets/images/icons/icon1.svg';
import reasonIcon2 from '../../../assets/images/icons/icon2.svg';
import reasonIcon3 from '../../../assets/images/icons/icon3.svg';
import reasonIcon4 from '../../../assets/images/icons/icon4.svg';

const Reasons = () => {
  return (
    <section className="section-reason">
      <div className="container">
        <h3 className="section-title">Why should you choose us?</h3>

        <ul className="list-reason row">
          <li className="reason-item col-3 col-sm-12">
            <div className="reason-icon">
              <img src={reasonIcon1} alt="Free Shipping" />
            </div>
            <div className="reason-content">
              <h4 className="reason-title">Free Shipping</h4>
              <p className="reason-description">
                All purchases over $199 are eligible forfree shipping via USPS
                First className Mail.
              </p>
            </div>
          </li>
          <li className="reason-item col-3 col-sm-12">
            <div className="reason-icon">
              <img src={reasonIcon2} alt="Easy Payments" />
            </div>
            <div className="reason-content">
              <h4 className="reason-title">Easy Payments</h4>
              <p className="reason-description">
                All payments are processed instantlyover a secure payment
                protocol.
              </p>
            </div>
          </li>
          <li className="reason-item col-3 col-sm-12">
            <div className="reason-icon">
              <img src={reasonIcon3} alt="Money-Back Guarantee" />
            </div>

            <div className="reason-content">
              <h4 className="reason-title">Money-Back Guarantee</h4>
              <p className="reason-description">
                If an item arrived damaged or you'vechanged your mind, you can
                send itback for a full refund.
              </p>
            </div>
          </li>
          <li className="reason-item col-3 col-sm-12">
            <div className="reason-icon">
              <img src={reasonIcon4} alt="Finest Quality" />
            </div>
            <div className="reason-content">
              <h4 className="reason-title">Finest Quality</h4>
              <p className="reason-description">
                Designed to last, each of our products hasbeen crafted with the
                finest materials.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reasons;
