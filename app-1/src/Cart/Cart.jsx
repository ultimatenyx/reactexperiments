function Cart({cart}){
    const cartList = cart?Object.values(cart):[];
    // console.log("cartlist",cartList);
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
}
export default Cart;