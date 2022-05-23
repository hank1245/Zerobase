import React from 'react'
import styles from './style/ItemCard.module.css'
import {useState} from 'react'

function ItemCard({product}) {
  const [count, setCount] = useState(1)
  
  const plus = () => {
      setCount(count+1)
  }
  const minus = () => {
      if(count < 2){
          return
      }
      setCount(count-1)
  }

  return (
    <div className={styles.productCard}>
      <figure className={styles.productCardImgBox}>
        <img src={product.image} alt={'상품 이미지'} className={styles.productCardImg} />
      </figure>
      <div className={styles.productDetail}>
          <p>{product.title}</p>
          <p>${Math.round(product.price)}</p>
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