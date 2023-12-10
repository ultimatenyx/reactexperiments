import { createContext } from "react";

const CartContext = createContext({
    cart:{},
    increaseQty = () => {},
    decreaseQty = () => {}
 }) ;