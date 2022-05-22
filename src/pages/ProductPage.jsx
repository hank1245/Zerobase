import styles from '../components/style/productInfo.module.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import ProductInfo from '../components/ProductInfo'


function ProductPage() {
  const params = useParams();
  const productId = params.id;


  const [selectedProduct, setselectedProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await axios.get('/products.json');
     
      return products.data;
    }

    
    fetchData().then(productsDatas =>{
      setselectedProduct(productsDatas[productId -1])
    });

  },[]);

 
  return (
  <section className={styles.productContainer}>
     <ProductInfo product={selectedProduct}/>
  </section>)
}

export default ProductPage;