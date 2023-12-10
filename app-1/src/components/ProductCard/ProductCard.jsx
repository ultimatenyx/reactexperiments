import './ProductCard.css';
import AddToCart from '../AddToCart';
import Rating from '../Rating';
function ProductCard({product,increaseQty,decreaseQty,cart}){
    return (<div className="card">
                <h2>{product.title}</h2>
                <h4>&#8377; {product.price*100}</h4>
                <Rating 
                rating={product.rating.rate} 
                maxRating={5}
                />
                <AddToCart 
                product={product}
                increaseQty={increaseQty} 
                decreaseQty={decreaseQty} 
                cart={cart}
                />
            </div>);
}
export default ProductCard;