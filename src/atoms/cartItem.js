import {atom} from "recoil";

export const cartState = atom({
  key: 'cart',
  default: JSON.parse(localStorage.getItem('cart')) || []
})