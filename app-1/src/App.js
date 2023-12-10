import "./styles.css";
import { useState } from "react";
import Products from "./components/Products/Products";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./components/Cart";
import CartPage from "./pages/CartPage";
import {Switch, Routes, Route} from "react-router-dom";

export default function App() {
  const [cart,setCart] = useState({});

  function increaseQty(product){
    console.log(cart);
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
    <div className="App">
      {/*
        <Routes>
      <Route path="/cart" Component={CartPage} />
      <Route 
        path="/" 
        Component={ProductsPage}
        />
        </Routes>*/
      }
        {
// <Cart cart={cart} />
      // <Products 
      // increaseQty={increaseQty} 
      // decreaseQty={decreaseQty} 
      // cart={cart}
        }
      
      />
    </div>
  );
}
