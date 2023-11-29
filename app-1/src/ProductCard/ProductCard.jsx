import './ProductCard.css';
function ProductCard(props){
    return (<div className="card">
                <span>{props.product.name}</span>
                <div>Rs. {props.product.price}</div>
            </div>);
}
export default ProductCard;