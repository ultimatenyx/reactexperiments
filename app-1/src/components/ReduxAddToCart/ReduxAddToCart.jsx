import { useDispatch, useSelector } from "react-redux";

function ReduxAddToCart({product}){
    let dispatch = useDispatch();
    // let cart = useSelector((state)=>{
    //     return state.items;
    // });
    let quantity = useSelector((state)=>{
        return state.cart.items[product.id]?.quantity || 0;
    })
    function increment(){
        // console.log("Increment");
        // increaseQty(product);
        dispatch({type:"ADD_TO_CART",payload:product});
    }
    function decrease(){
        dispatch({type:"REMOVE_FROM_CART",payload:product});
        // decreaseQty(product);
    }
    // const quantity = cart[product.id]?cart[product.id].quantity:0;
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

export default ReduxAddToCart;