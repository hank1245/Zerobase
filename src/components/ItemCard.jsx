import React from 'react'
import styles from './style/ItemCard.module.css'
import {useState} from 'react'
import { useRecoilState } from 'recoil';
import {cartState} from '../atoms/cartItem'
import { Link } from 'react-router-dom';

function ItemCard({product}) {
  const [count, setCount] = useState(product.count)
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
    setCount(count + n);
    product['count'] = count;
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
    setCount(0);
  }
  
  const plus = () => {
    updateCartCount(product.id, 1);
  }
  const minus = () => {
    if(count < 2){
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
        <p><Link to={`/product/${product.id}`}>{product.title}</Link></p>
        <p>${Math.round(product.price * product.count)}</p>
        <div className={styles.counter}>
          <div onClick={minus} className={styles.leftbtn}>-</div>
          <span>{count}</span>
          <div onClick={plus} className={styles.rightbtn}>+</div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard