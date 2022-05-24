import styles from './style/productsList.module.css';
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom";
import {useRecoilValue} from 'recoil';
import {darkModeState} from "../atoms/darkMode";

function ProductCardList(props) {
  const isDarkMode = useRecoilValue(darkModeState);
  const darkClass = isDarkMode ? styles.App_dark + " " : "";
  const products = props.products;
  const category = props.category;

  return (
    <section className={darkClass + styles.productsList}>
      <h2 className={styles.productsListTitle}>{category}</h2>
      <div className={styles.productCardsList}>
        {products.map((product) => (
          <Link 
            to={`/product/${product['id']}`} 
            key={product['id']}
            style={{textDecoration: 'none'}}
          >
            <ProductCard product={product}/>
          </Link>
        ))}
      </div>
    </section>
  )
};

export default ProductCardList;