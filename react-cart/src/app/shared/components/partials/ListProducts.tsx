import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import listProducts from '../../../data/products.json'
import { ProductOptions } from '../../types/Product';
import CardProduct from './CardProduct';

interface titleOptions {
  titleLeft: boolean;
}

const ListProducts = (props: titleOptions) => {
  const { titleLeft } = props;
  const [products, setProducts] = useState<ProductOptions[]>(listProducts)

  return (
    <section className="section-products">
      <div className="container">
        {titleLeft ? (
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="section-title">Selected just for you</h3>
            <Link to="" className="btn btn-outline">SHOW MORE</Link>
          </div>
        ) : (
          <h3 className="section-title text-center">Products in today</h3>
        )}

        <ul className="list-products row">
          {
            products.length > 0 ? products.map((product: ProductOptions) => CardProduct(product)) : ''
          }
          {/* <li className="card-product col-3 col-sm-6">
            <div className="card-image">
              <img
                src="./images/product1.png"
                alt="T-Shirt Summer Vibes"
                className="image"
              />
              <p className="badge badge-danger">-50%</p>
              <span className="cart-icon">
                <i className="fal fa-cart-plus"></i>
              </span>
            </div>
            <div className="card-body">
              <h4 className="card-name">T-Shirt Summer Vibes</h4>
              <div className="card-prices">
                <span className="new-price">$89.99</span>
                <span className="old-price">$119.99</span>
              </div>
            </div>
          </li> */}

        </ul>
      </div>
    </section>
  );
};

export default ListProducts;
