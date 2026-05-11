import { Link } from 'react-router-dom'


export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-class-name">{product.name}</h3>
        <p className="product-class-price ">${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary">View Details</Link>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
