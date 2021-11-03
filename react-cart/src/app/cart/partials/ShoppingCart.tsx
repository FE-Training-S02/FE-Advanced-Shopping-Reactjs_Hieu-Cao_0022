import React from 'react';

import cartIcon from '../../../assets/images/cart/noun-cart.svg';
import deliveryIcon from '../../../assets/images/cart/delivery.svg';
import arrowLeftIcon from '../../../assets/images/cart/arrow-left.svg';
import sendIcon from '../../../assets/images/cart/send.svg';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  return (
    <section className="section-cart">
      <div className="container">
        <div className="section-title d-flex justify-content-between align-items-center">
          <h2 className="title-content">Shopping Cart</h2>
          <div className="title-icons d-flex justify-content-between align-items-center">
            <span className="cart-icon">
              <img src={cartIcon} alt="cart icon" />
            </span>
            <span className="line"></span>
            <span className="shipping-icon d-flex align-items-center">
              <img src={deliveryIcon} alt="delivery icon" />
            </span>
          </div>
        </div>

        <table className="cart-content">
          <tr>
            <th className="col-1 text-left">Product</th>
            <th className="col-2"></th>
            <th className="col-2 text-center">Color</th>
            <th className="col-2 text-center">Size</th>
            <th className="col-2 text-center">Amount</th>
            <th className="col-2 text-center">Price</th>
            <th className="col-1"></th>
          </tr>

          {/* <tr>
            <td className="product-image col-1"><img src='./assets/images/cart/product.png'></td>
            <td className="product-info col-2">
              <span className="product-name">T-Shirt Summer Vibes</span>
              <span className="product-id">#261311</span>
            </td>
            <td className="product-color col-2 text-center">White</td>
            <td className="product-size col-2 text-center">XL</td>
            <td className="product-options col-2 text-center">
              <span className="options-content d-flex justify-content-center">
                <button className="descrease">-</button>
                <p className="qty">5</p>
                <button className="increase">+</button>
              </span>
            </td>
            <td className="product-price col-2 text-center">$99.88</td>
            <td className="product-delete col-1 text-right"><img src='./assets/images/cart/cancel.svg'></td>
          </tr> */}
        </table>

        <div className="cart-bottom">
          <Link to="/" className="go-back">
            <img src={arrowLeftIcon} alt="Continue Shopping" />
            Continue Shopping
          </Link>
          <form className="fromo-code">
            <input placeholder="Fromo code" className="input" />
            <img src={sendIcon} alt="send code" />
          </form>
          <div className="checkout">
            <p className="checkout-content">
              Total cost
              <span className="total-cost">$159,98</span>
            </p>
            <span className="btn btn-checkout">CHECKOUT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
