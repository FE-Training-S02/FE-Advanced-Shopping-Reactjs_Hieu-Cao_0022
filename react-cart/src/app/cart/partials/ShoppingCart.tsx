import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cartIcon from '../../../assets/images/cart/noun-cart.svg';
import deliveryIcon from '../../../assets/images/cart/delivery.svg';
import arrowLeftIcon from '../../../assets/images/cart/arrow-left.svg';
import sendIcon from '../../../assets/images/cart/send.svg';
import { RootState } from '../../stores/app-reducer';
import { ProductOptions } from '../../shared/types/Product';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const listItemCart: ProductOptions[] = useSelector((state: RootState) => state.cart);
  const totalPrice = listItemCart.reduce(
    (total: number, item: ProductOptions) => total + (item.quantity || 1) * item.price,
    0
  );

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
          <tbody>
            <tr>
              <th className="col-1 text-left">Product</th>
              <th className="col-2"></th>
              <th className="col-2 text-center">Color</th>
              <th className="col-2 text-center">Size</th>
              <th className="col-2 text-center">Amount</th>
              <th className="col-2 text-center">Price</th>
              <th className="col-1"></th>
            </tr>
            {
              listItemCart?.map((item: ProductOptions) => CartItem(item))
            }
          </tbody>
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
              <span className="total-cost">${totalPrice.toFixed(2)}</span>
            </p>
            <span className="btn btn-checkout">CHECKOUT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
