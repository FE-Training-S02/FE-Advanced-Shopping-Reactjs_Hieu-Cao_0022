import { cartConstant } from "../../shared/constants/Cart"
import { ProductOptions } from "../../shared/types/Product"

export const addItemToCart = (product: ProductOptions, quantity: number) => {
  return {
    type: cartConstant.HANDLE_INCREASE_OR_DESCREASE_QUANTITY,
    payload: {product, quantity}
  }
}

export const DeleteToCart = (product: ProductOptions) => {
  return {
    type: cartConstant.DELETE_TO_CART,
    payload: product
  }
}
