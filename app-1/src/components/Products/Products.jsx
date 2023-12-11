import { useEffect, useState, memo } from "react";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
// const products = [{"id":1001,"name":"Samsung Mobile","price":30000,"url":"http://c2c.sulekhalive.com/lcproducts/mobiles/images/samsung/album/large/samsung-z3(2).jpg"},{"id":1002,"name":"Apple Mobile","price":40000,"url":"https://4.imimg.com/data4/LY/WP/GLADMIN-8934545/apple-mobiles-500x500.jpg"},{"id":1003,"name":"Lg Mobile","price":20000,"url":"http://www.lg.com/uk/images/mobile-phones/MD05609550/stylus-350.jpg"},{"id":1004,"name":"MI Mobile","price":10000,"url":"https://www.91-img.com/pictures/xiaomi-mi-5s-mobile-phone-large-1.jpg"}];
// function getProductsApi(callback){
// 	setTimeout(function(){
// 		callback(products);
// 	},1000)
// }
export default memo(function Products({increaseQty,decreaseQty,cart}){
	let [gp,setGp] = useState([]);
	let [isLoading,setLoading] = useState(true);
	// let gp = [];
	useEffect(function(){
		// getProductsApi(function(res){
		// 	// gp=res;
		// 	setGp(res);
		// 	setLoading(false);
		// });
		// console.log(isLoading);
		fetch("https://fakestoreapi.com/products")
		.then((res)=>{
			// console.log(res);
			return res.json();
		})
		.then((response)=>{
			// console.log(response);
			setGp(response);
			setLoading(false);
		});
		// console.log(JSON.stringify(gp));
	},[])
	if(isLoading){
		return <div><img alt="loader" src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" /></div>
	}else{
		return (<div>
			<Link to="/cart" >View Cart</Link>
			
			{gp.map((product)=>{
				return (
					<ProductCard 
					product={product} 
					key={product.id} 
					increaseQty={increaseQty} 
					decreaseQty={decreaseQty} 
					cart={cart}
					/>
					);
			})}
		</div>);
	}
    
}
)