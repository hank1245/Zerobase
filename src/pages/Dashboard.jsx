import CarouselComponent from "../components/Carousel"
import ProductCardList from "../components/ProductsList";
import {useSelector} from "react-redux";
import Category from "../constants/category";

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
  const productsData = useSelector(state => state['products']);
  const fashionProducts = productsData.filter((product) => Category[product['category']] === 'fashion');
  const accessoryProducts = productsData.filter((product) => Category[product['category']] === 'accessory');
  const digitalProducts = productsData.filter((product) => Category[product['category']] === 'digital');
  
  return (
    <>
      <CarouselComponent/>
      <section style={{margin: '2.5rem auto'}}>
        <ProductCardList category={'패션'} products={maxFourProducts(fashionProducts)} />
        <ProductCardList category={'액세서리'} products={maxFourProducts(accessoryProducts)} />
        <ProductCardList category={'디지털'} products={maxFourProducts(digitalProducts)} />
      </section>
    </>
  )
}

export default Dashboard;