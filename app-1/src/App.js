import "./styles.css";
import { useState } from "react";
// import Products from "./components/Products/Products";
import ProductsPage from "./pages/ProductsPage";
// import Cart from "./components/Cart";
import CartPage from "./pages/CartPage";
import { Routes, Route} from "react-router-dom";
import CartContext from "./context/CartContext";
import NotFound from "./pages/NotFound";

export default function App() {
  const [cart,setCart] = useState({});

  function increaseQty(product){
    // console.log(cart);
    const newCart = {...cart};
    if(!newCart[product.id]){
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0
      }
    }
    newCart[product.id].quantity+=1;
    setCart(newCart);
  }
  function decreaseQty(product){
    const newCart = {...cart};
    if(!newCart[product.id]) return;
    newCart[product.id].quantity-=1;
    if(newCart[product.id].quantity<=0){
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  return (
    <CartContext.Provider value={{cart,increaseQty,decreaseQty}}>
    <div className="App">
      {
        
        <Routes>
        <Route exact={true} path="/cart" Component={CartPage} />
        <Route exact={true} path="/" Component={ProductsPage} />
        <Route path="*" Component={NotFound} />
        </Routes>
        
      }
      {
        /*
         <Cart />
      <Products />
        */
      }
      
      
    </div>
    </CartContext.Provider>
  );
}
