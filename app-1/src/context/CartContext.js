import { createContext } from "react";

const CartContext = createContext({
    cart:{},
    increaseQty : () => {},
    decreaseQty : () => {}
 }) ;

 export default CartContext;