import './ProductCard.css';
function ProductCard(props){
    return (<div className="card">
                <span>{props.product.title}</span>
                <div>&#8377;. {props.product.price*100}</div>
            </div>);
}
export default ProductCard;