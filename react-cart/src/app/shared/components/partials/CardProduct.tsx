import React from 'react';

import { useDispatch } from 'react-redux';

import { handleDecrementOrIncreaseQuantity } from '../../../stores/cart/actions';
import { ProductOptions } from '../../types/Product';

const CardProduct = (product: ProductOptions) => {
  const { id, name, image, price, discount } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product: ProductOptions) => {
    dispatch(handleDecrementOrIncreaseQuantity(product, 1));
  };

  return (
    <li className="card-product col-3 col-sm-6" key={id}>
      <div className="card-image">
        <img src={image} alt={name} className="image" />
        {discount > 0 ? <p className="badge badge-danger">-{discount}%</p> : ''}
        <span className="cart-icon" onClick={() => handleAddToCart(product)}>
          <i className="fal fa-cart-plus"></i>
        </span>
      </div>
      <div className="card-body">
        <h4 className="card-name">{name}</h4>
        <div className="card-prices">
          {discount > 0 ? (
            <>
              <span className="new-price">
                ${(price * (100 - discount)) / 100}
              </span>
              <span className="old-price">${price}</span>
            </>
          ) : (
            <span className="price">${price}</span>
          )}
        </div>
      </div>
    </li>
  );
};

export default CardProduct;
