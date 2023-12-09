import "./styles.css";
import { useState } from "react";
import Products from './Products/Products';


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
    
      <Products 
      increaseQty={increaseQty} 
      decreaseQty={decreaseQty} 
      cart={cart}
      />
    </div>
  );
}
