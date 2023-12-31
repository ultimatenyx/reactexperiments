import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({product}){
    const {cart,increaseQty,decreaseQty} = useContext(CartContext);
    function increment(){
        // console.log("Increment");
        increaseQty(product);
    }
    function decrease(){
        decreaseQty(product);
    }
    const quantity = cart[product.id]?cart[product.id].quantity:0;
    if(quantity===0){
        return (
            <div>
            <button onClick={increment}>Add To Cart</button>
            </div>
        );
    }else{
        return (
            <div>
            
            <button onClick={decrease}> - </button>
            <span> {quantity} </span>
            <button onClick={increment}> + </button>
            
            </div>
        );
    }
    
}

export default AddToCart;