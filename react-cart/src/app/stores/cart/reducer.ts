import { cartConstant } from '../../shared/constants/Cart';
import { ProductOptions } from '../../shared/types/Product';

const initialState = JSON.parse(localStorage.getItem('cart') || '[]');

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case cartConstant.HANDLE_INCREASE_OR_DESCREASE_QUANTITY: {
      let cartItems = [...state];
      let product = cartItems.find(
        (item: ProductOptions) => item.id === action.payload.product.id
      );
      if (product) {
        product.quantity = product.quantity + action.payload.quantity
      } else {
        let newItem = {
          id: action.payload.product.id,
          quantity: 1,
        };
        cartItems.push(newItem);
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
      return cartItems;
    }

    case cartConstant.DELETE_TO_CART: {
      let cartItems = [...state];
      cartItems = cartItems.filter(
        (item: ProductOptions) => item.id !== action.payload.id
      );
      localStorage.setItem('cart', JSON.stringify(cartItems));
      return cartItems;
    }

    default:
      return state;
  }
};
