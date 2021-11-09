import React from 'react';

import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <section className="section-collections">
      <div className="container">
        <ul className="list-collections row">
          <div className="col-6 col-sm-12">
            <li className="collection-item h-100">
              <div className="card-collection">
                <img
                  src="/images/collection1.png"
                  alt="New arrivalsare now in"
                  className="card-image"
                />
                <div className="collection-content">
                  <h4 className="collection-title">New arrivalsare now in!</h4>
                  <Link to="" className="btn btn-secondary">
                    SHOW COLLECTION
                  </Link>
                </div>
              </div>
            </li>
          </div>
          <div className="col-6 col-sm-12">
            <div className="row h-100">
              <li className="collection-item h-100 col-6 col-sm-6">
                <div className="card-collection">
                  <img
                    src="/images/collection2.png"
                    alt="Basic t-shirts"
                    className="card-image"
                  />
                  <div className="collection-content">
                    <h4 className="collection-title">
                      Basic t-shirts
                      <p className="price">$29,99</p>
                    </h4>
                    <Link to="" className="btn btn-secondary">
                      MORE DETAILS
                    </Link>
                  </div>
                </div>
              </li>
              <li className="collection-item h-100 col-6 col-sm-6">
                <div className="card-collection">
                  <img
                    src="/images/collection3.png"
                    className="card-image"
                    alt="Sale this summer"
                  />
                  <span className="badge badge-danger">-50%</span>
                  <div className="collection-content">
                    <h4 className="collection-title">Sale this summer</h4>
                    <Link to="" className="btn btn-secondary">
                      VIEW ALL
                    </Link>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Collections;
