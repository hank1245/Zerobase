import './style/productsList.css';
import ProductCard from "../components/ProductCard";
import {Link} from "react-router-dom";

function ProductCardList(props) {
  const products = props.products;
  const category = props.category;

  return (
    <section className='productsList'>
      <h2 className='productsListTitle'>{category}</h2>
      <div className='productCardsList'>
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