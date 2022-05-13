import productsData from './products.json';
import Category from "../constants/category";

const products = (state = productsData, action) => {
  if (Object.values(Category).includes(action.type)) {
    return productsData.filter(p => Category[p['category']] === action.type)
  }
  return state
}

export default products
