import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {darkModeState} from "../atoms/darkMode";
import styles from './style/ShoppingCart.module.css'
import {cartState} from '../atoms/cartItem'
import ItemCard from './ItemCard'
import { Button } from 'react-bootstrap'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function ShoppingCart() {
  const isDarkMode = useRecoilValue(darkModeState);
  const [products,setProducts] = useRecoilState(cartState)
  const totalPrice = Object.keys(products).reduce((prev,cur) => prev + (products[cur].price * products[cur].count),0)
  const [isOpen,setIsOpen] = useState(false)

  const $body = document.getElementsByTagName('body')[0];

  const openModal = () => {
    $body.classList.add('stopScrolling');
    setIsOpen(true)
  }
  const closeModal = () => {
    $body.classList.remove('stopScrolling');
    setIsOpen(false)
  }
  const closeModalAndDelete = () => {
    localStorage.removeItem('cart')
    setProducts([])
    setIsOpen(false)
  }

  if(products.length <1) {
    return ( 
    <div className={styles.noProduct}>
      <p>장바구니에 상품이 없습니다</p>
      <Link to='/'><Button variant='primary'>담으러 가기</Button></Link>
    </div>)
  }

  return (
  <>
    <section className={styles.categoryContainer}>
      <div className={styles.breadcrumbs}>
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      <div className={styles.productList}>
        <div className={styles.productCards}>
          {products.map(product => (<ItemCard product={product} />))}
        </div>
        <div className={styles.total}>
          <p>총: ${Math.round(totalPrice)}</p>
          <Button variant='primary' size='lg' onClick={openModal}>구매하기</Button>
        </div>
      </div>
    </section>

    <div className={(isDarkMode ? styles.App_dark : styles.App_light) + " " + styles.modalBg + (isOpen ?  " " + styles.visible : "")}>
      <div className={styles.modal}>
        <h3>정말로 구매하시겠습니까?</h3>
        <p>장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className={styles.modalBtnBox}>
          <Button variant='primary' onClick={closeModalAndDelete}>네</Button>
          <Button variant='dark' onClick={closeModal}>아니오</Button>
        </div>
      </div>
    </div>
  </>
  )
}

export default ShoppingCart