import styles from './style/productInfo.module.css';
import {CategoryKR, Category} from "../constants/category";
import { Button } from 'react-bootstrap';
import {BsStarFill,BsStarHalf} from 'react-icons/bs';
import {BiStar} from 'react-icons/bi';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {cartState} from '../atoms/cartItem'

function ProductInfo(props) {

  const product = props.product;
  const categoryKR = CategoryKR[Category[product['category']]]
  const rating = product.rating;
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const StarPush = () => {
    const stars = []
    let star = rating['rate'];
  
    for(let i = 0; i < 5; i++) {
      if(star > 1){
        stars.push(<BsStarFill fill="yellow" size="1.5rem" key={i}></BsStarFill>)
        star -= 1;
      } else if(star >= 0.5) {
        stars.push(<BsStarHalf fill="yellow" size="1.5rem" key={i}></BsStarHalf>)
        star = 0
      } else stars.push(<BiStar fill="yellow"  size="1.5rem" key={i}></BiStar>)
    }
    return stars
  }

  const isCartItem = (id) => {
    let bool = false;
    cartItem.forEach(item => {
      if (item.id === id) bool = true;
    })
    return bool;
  }

  const updateCartCount = (id) => {
    const updateCart = cartItem.map((item) => {
      if (item.id === id) {
        return {...item, ['count']: item.count + 1};
      } else {
        return item;
      }
    });
    localStorage.setItem('cart', JSON.stringify(updateCart))
    setCartItem(updateCart);
  }

  const addCart = () => {
   if (isCartItem(product.id)) {
    updateCartCount(product.id);
   } else {
    product['count'] = 1;
    localStorage.setItem('cart', JSON.stringify([...cartItem, product]))
    setCartItem([...cartItem, product])
   }
  }



  return (
    <section >
      <div className={styles.breadcrumbs}>
        <ul>
        <li>{categoryKR}</li>
        <li>{product.title}</li>
        </ul>
      </div>

      <div className={styles.productInfoContainer}>
        <figure className={styles.productImgBg}>
          <img src={product.image} alt={'상품 이미지'} className={styles.productImg} />
        </figure>

        <div className={styles.productCardBody}>
          <h2 className={styles.cardTitle}>{product.title}
            <span className={styles.cardBadgeNew}>new</span>
          </h2>
          <p>{product.description}</p>

          <div className={styles.ratingInfo}>
            <span className={styles.ratingStar}>{rating && StarPush()}</span>
            <span> {rating && rating['rate']}</span>
            <span> / {rating ? rating['count'] : ""}명 참여</span>
          </div>
          
         <p className={styles.price}>${Math.round(product['price'])}</p>




         <div className={styles.cardActions}>
           <Button variant="primary" onClick={()=>addCart()} className={styles.btnAni}>장바구니에 담기{console.log(cartItem)}</Button>
           <Link to='/cart'><Button variant="outline-secondary" className={styles.btnAni}>장바구니로 이동</Button></Link>
         </div>
        </div>
      </div>
    </section>
  )
};

export default ProductInfo;