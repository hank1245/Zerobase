import './style/productCard.css';

function ProductCard(props) {
  const product = props.product;

  return (
    <div className="productCard">
      <figure className="productCardImgBox">
        <img src={product['image']} alt={'상품 이미지'} className="productCardImg" />
      </figure>
      <div className="productCardInfoBox">
        <p className="cardTitle">{product['title']}</p>
        <p className="cardCost">${product['price']}</p>
      </div>
    </div>
  )
};

export default ProductCard;