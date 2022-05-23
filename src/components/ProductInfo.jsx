
import styles from './style/productInfo.module.css';
import {CategoryKR, Category} from "../constants/category";
import { Button } from 'react-bootstrap';
import {BsStarFill,BsStarHalf} from 'react-icons/bs';
import {useState, useEffect} from 'react'




function ProductInfo(props) {

  const product = props.product;
  const categoryKR = CategoryKR[Category[product['category']]]
  const rating = product.rating;
  

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
    } else stars.push(<BsStarFill fill="gray" size="1.5rem" key={i}></BsStarFill>)
  }
  return stars
}
const [isBtnActive, setisBtnActive] = useState(false)

  const btnClick = () => {
   setisBtnActive(true);
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
            <div className={styles.ratingStar}>{rating && StarPush()}</div>
            <div> {rating && rating['rate']}</div>
            <div> / {rating ? rating['count'] : ""}명 참여</div>
          </div>
          
         <p className={styles.price}>${Math.round(product['price'])}</p>

         <div className={styles.cardActions}>
           <Button variant="primary" onClick={()=>btnClick()} className={`${isBtnActive ? "btnAni" : ""}`}>장바구니에 담기</Button>
           <Button variant="outline-secondary" onClick={()=>btnClick()} className={`${isBtnActive ? "btnAni" : ""}`}>장바구니로 이동</Button>
         </div>
        </div>
      </div>
    </section>
  )
};

export default ProductInfo;