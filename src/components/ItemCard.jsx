import React from 'react'
import styles from './style/ItemCard.module.css'
import { useRecoilState } from 'recoil';
import {cartState} from '../atoms/cartItem'
import { Link } from 'react-router-dom';

function ItemCard({product}) {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  
  const updateCartCount = (id, n) => {
    const updateCart = cartItem.map((item) => {
      if (item.id == id) {
        return {...item, ['count']: item.count + n};
      } else {
        return item;
      }
    });
    localStorage.setItem('cart', JSON.stringify(updateCart))
    setCartItem(updateCart);
  }
  const deleteCartItem = (id) => {
    let deleteItem = [];
    cartItem.forEach((item) => {
      if (item.id !== id) {
        deleteItem.push(item);
      }
    });
    localStorage.setItem('cart', JSON.stringify(deleteItem))
    setCartItem(deleteItem);
  }
  
  const plus = () => {
    updateCartCount(product.id, 1);
  }
  const minus = () => {
    if(product.count < 2){
      deleteCartItem(product.id);
      return;
    }
    updateCartCount(product.id, -1);
  }

  return (
    <div className={styles.productCard}>
      <figure className={styles.productCardImgBox}>
        <img src={product.image} alt={'상품 이미지'} className={styles.productCardImg} />
      </figure>
      <div className={styles.productDetail}>
        <h2><Link to={`/product/${product.id}`}>{product.title}</Link></h2>
        <p>${Math.round(product.price * product.count)}</p>
        <div className={styles.counter}>
          <div onClick={minus} className={styles.leftbtn}>-</div>
          <span>{product.count}</span>
          <div onClick={plus} className={styles.rightbtn}>+</div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard