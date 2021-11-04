import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { ProductOptions } from '../../shared/types/Product';
import deleteButton from '../../../assets/images/cart/cancel.svg';
import { DeleteToCart, handleDecrementOrIncreaseQuantity } from '../../stores/cart/actions';

const CartItem = (product: ProductOptions) => {
  const { id, name, image, price, quantity } = product;
  const dispatch = useDispatch();

  const handleChangeQuantity = (product: ProductOptions, increase = true) => {
    if (increase) {
      dispatch(handleDecrementOrIncreaseQuantity(product, 1));
    } else {
      dispatch(handleDecrementOrIncreaseQuantity(product, -1));
    }
  };

  const handleDeleteToCart = (product: ProductOptions) => {
    dispatch(DeleteToCart(product))
  }

  return (
    <tr key={id}>
      <td className="product-image col-1">
        <img src={image} alt={name} />
      </td>
      <td className="product-info col-2">
        <span className="product-name">{name}</span>
        <span className="product-id">#261311</span>
      </td>
      <td className="product-color col-2 text-center">White</td>
      <td className="product-size col-2 text-center">XL</td>
      <td className="product-options col-2 text-center">
        <span className="options-content d-flex justify-content-center">
          <button
            className={quantity === 1 ? `descrease disable` : 'descrease'}
            onClick={() => handleChangeQuantity(product, false)}
          >
            -
          </button>
          <p className="quantity">{quantity}</p>
          <button
            className="increase"
            onClick={() => handleChangeQuantity(product, true)}
          >
            +
          </button>
        </span>
      </td>
      <td className="product-price col-2 text-center">${quantity ? (quantity * price).toFixed(2) : price}</td>
      <td className="product-delete col-1 text-right">
        <img src={deleteButton} alt="delete cart item" onClick={() => handleDeleteToCart(product)} />
      </td>
    </tr>
  );
};

export default CartItem;
