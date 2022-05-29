import styles from './style/productCard.module.css'
import {useRecoilValue} from 'recoil';
import {darkModeState} from "../atoms/darkMode"

function ProductCard(props) {
  const isDarkMode = useRecoilValue(darkModeState);
  const darkClass = isDarkMode ? styles.App_dark + " " : "";
  const product = props.product;

  return (
    <div className={darkClass + styles.productCard}>
      <figure className={styles.productCardImgBox}>
        <img src={product.image} alt={'상품 이미지'} className={styles.productCardImg} />
      </figure>
      <div className={styles.productCardInfoBox}>
        <p className={styles.cardTitle}>{product['title']}</p>
        <p className={styles.cardCost}>${Math.round(product.price)}</p>
      </div>
    </div>
  )
};

export default ProductCard;