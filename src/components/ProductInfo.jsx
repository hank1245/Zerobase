
import styles from './style/productInfo.module.css';
import {useState, useEffect} from 'react'
import {CategoryKR, Category} from "../constants/category";
import { Button } from 'react-bootstrap';


function ProductInfo(props) {
  const product = props.product
  const rating = product.rating
  const categoryKR = CategoryKR[Category[product['category']]]

  const [click, setClick] = useState(false)

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
            <div className={styles.ratingStar}>{rating && rating.rate}</div>
            <div className={styles.ratingCount}> /  참여</div>
          </div>
          
         <p className={styles.price}>${Math.round(product['price'])}</p>

         <div className={styles.cardActions}>
           <Button variant="primary" className={click === true? 'btnAni':''} onClick={()=>setClick(true)}>장바구니에 담기</Button>
           <Button variant="outline-secondary" >장바구니로 이동</Button>
         </div>
        </div>
      </div>
    </section>
  )
};

export default ProductInfo;