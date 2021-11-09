import React, { useContext } from 'react';

import { useDispatch } from 'react-redux';

import { ProductOptions } from '../../types/Product';
import { addItemToCart } from '../../../stores/cart/actions';
import { NotificationContext } from '../../../notifications/NotificationProvider';

const CardProduct = (product: ProductOptions) => {
  const { id, name, image, price, discount } = product;
  const dispatch = useDispatch();
  const { handleAddNotification } = useContext(NotificationContext)

  const handleAddToCart = (product: ProductOptions) => {
    dispatch(addItemToCart(product, 1));
    handleAddNotification({ type: 'SUCCESS', message: 'Added product to cart' })
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
