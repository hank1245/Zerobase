import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {CategoryKR, Category} from "../constants/category";
import ProductCardList from "../components/ProductsList";
import styles from '../components/style/productsList.module.css';

function CategoryPage() {
  const params = useParams();
  const category = params.category;
  const categoryKR = CategoryKR[category];
  
  const [categoryProducts, setCategodyProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await axios.get('/products.json');
      return products.data;
    }

    fetchData().then(p => {
      setCategodyProducts(p.filter((product) => Category[product['category']] === category));
    });
  }, []);
  
  return (
    <>
     <section className={styles.categoryContainer}>
      <div className={styles.breadcrumbs}>
        <ul>
          <li>홈</li>
          <li>{categoryKR}</li>
        </ul>
      </div>
      <ProductCardList category={categoryKR} products={categoryProducts} />
    </section>
    </>
  )
}

export default CategoryPage