import CarouselComponent from "../components/Carousel"
import ProductCardList from "../components/ProductsList";
import {Category} from "../constants/category";
import axios from 'axios';
import {useState, useEffect} from 'react';
import styles from '../components/style/productsList.module.css';

function maxFourProducts(products) {
  const result = [];
  if (products.length > 4) {
    for (let i = 0; i < 4; i++) {
      result.push(products[i]);
    }
  } else {
    return products;
  }
  return result;
}

function Dashboard() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await axios.get('/products.json');
      return products.data;
    }

    fetchData().then(p => {
      setProductsData(p);
    });
  }, []);

  const fashionProducts = productsData.filter((product) => Category[product['category']] === 'fashion');
  const accessoryProducts = productsData.filter((product) => Category[product['category']] === 'accessory');
  const digitalProducts = productsData.filter((product) => Category[product['category']] === 'digital');
  
  return (
    <>
      <CarouselComponent/>
      <section className={styles.dashboard} style={{margin: '2.5rem auto'}}>
        <ProductCardList category={'패션'} products={maxFourProducts(fashionProducts)} />
        <ProductCardList category={'액세서리'} products={maxFourProducts(accessoryProducts)} />
        <ProductCardList category={'디지털'} products={maxFourProducts(digitalProducts)} />
      </section>
    </>
  )
}

export default Dashboard;