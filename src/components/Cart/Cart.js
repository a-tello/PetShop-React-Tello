import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../CartContext/CartProvider"
import './cart.css'

const Cart = () => {

    const { cart, clear, removeItem, total } = useContext(context)
    

    const handleRemove = (e) =>{
        const idProduct = e.target.getAttribute('data-id')
        removeItem(idProduct)
    }

    return(
        <div className='cart-container'>
            {cart.length 
                ?   <div className='products-container'>
                        {cart.map((product) => {
                            return(
                                <div className='product-info'>
                                    <div className='thumbnail'>
                                        <img src={product.img} alt={product.name}/>
                                    </div>
                                    <span className='product-name'>{product.name}</span>
                                    <span className='product-price'>{product.quantity}u.x${product.price * product.quantity}</span>
                                    <span data-id={product.id} className='product-remove' onClick={handleRemove}>Eliminar</span>
                                </div>
                        )
                    })}
                        <span className='clearButton' onClick={clear}>Vaciar carrito</span>
                        <span className='total'>Total: ${total}</span>
                        <Link className='purchase-btn' to='/checkout'>Finalizar compra</Link>
                    </div>                        

                    
                :   <div className='empty-cart'>
                        <h2 className='empty-cart-title'>El carrito de compras está vacío</h2>
                        <p className='empty-cart-description'>Parece que aun no has seleccionado ningun producto. No te preoucpes, podés darte una vuelta por la tienda y elegir lo que quieras</p>
                        <Link className='empty-cart-button' to='/'>Descubrir productos</Link>
                    </div>}
        </div>
    )
}
export default Cart
