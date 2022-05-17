import {atom} from "recoil";

export const darkModeState = atom({
  key: 'darkMode',
  default: localStorage.getItem('reactShopIsDarkMode') === 'true' || false
})