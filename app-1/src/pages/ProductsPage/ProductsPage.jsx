import Products from "../../components/Products/Products";
function ProductsPage({increaseQty,decreaseQty,cart}){
    return (
        <Products 
            increaseQty={increaseQty} 
			decreaseQty={decreaseQty} 
			cart={cart}
        />
        );
}

export default ProductsPage;