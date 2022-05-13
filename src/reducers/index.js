import { combineReducers } from 'redux'
import products from './products'
import theme from './theme'

export default combineReducers({
  products,
  theme
})
