import { useContext, useState } from "react"
import { context } from "../CartContext/CartProvider"
import OrderForm from "../OrderForm/OrderForm"
import './cart.css'

const Cart = () => {

    const { cart, clear, removeItem, total } = useContext(context)
    

    const handleRemove = (e) =>{
        const idProduct = e.target.getAttribute('data-id')
        removeItem(idProduct)
    }
    /* const handleSubmit = (e) =>{
        
    } */

    return(
        <>
            <div className='cart-container'>
                {cart.length 
                ? <div>
                    {cart.map((product) => {
                        return(
                        <div className='product-info'>
                            <div className='thumbnail'>
                                <img src={product.img} alt={product.name}/>
                            </div>
                            <span className='product-name'>{product.name}</span>
                            <span className='product-price'>{product.quantity}u.x${product.price * product.quantity}</span>
                            <span data-id={product.id} className='product-remove' onClick={handleRemove}>Eliminar</span>
                        </div>)
                            }
                    )}
                        <span>Total: {total}</span>
                        <OrderForm/>
                    </div>
                    
                    
                : <h2>'El carrito de compras está vacío'</h2>}
            </div>
            <button className='clearButton' onClick={clear}>Vaciar Carrito</button>
        </>
    )
}
export default Cart
