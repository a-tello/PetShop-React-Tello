import { useContext } from "react"
import { context } from "../CartContext/CartProvider"
import './cart.css'
const Cart = () => {
    
    const { cart, clear } = useContext(context)
    console.log(cart);

    return(
        <>
            {cart.map((product) => {
                    return(
                    <div className='cart-info'>
                        <div className='thumbnail'>
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <h2 style={{color: 'black'}}>{product.name}</h2>
                    </div>)
                        }
                )}
            <button onClick={clear}>Vaciar Carrito</button>
        </>
    )
}
export default Cart
