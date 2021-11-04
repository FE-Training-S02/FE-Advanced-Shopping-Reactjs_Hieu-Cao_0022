import { combineReducers } from 'redux';
import { cartReducer } from './cart/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
