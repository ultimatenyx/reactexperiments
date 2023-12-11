import { useContext } from "react";
import CartContext from "../../context/CartContext";
import useWindowSize from "../../hooks/useWindowSize";
function Cart(){
    const {cart} = useContext(CartContext);
    const cartList = cart?Object.values(cart):[];
    let {width,height} = useWindowSize();
    // console.log(width);
    // console.log("cartlist",cartList);

    if(width>1440){
        return (
            <div>
                <ul>
                {
                    cartList.map((item) => {
                        return <li key={item.id}>{item.title} {item.quantity}</li>;
                    })
                }
                </ul>
            </div>
        );
    }else{
        return null;
    }
    
}
export default Cart;