import { useContext, useState,  } from "react"
import { Link } from "react-router-dom"
import { context } from "../CartContext/CartProvider"
import OrderForm from "../OrderForm/OrderForm"
import './cart.css'
import Swal from "sweetalert2"


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


const Cart = () => {

    const { cart, clear, removeItem, total } = useContext(context)
    

    const handleRemove = (e) =>{
        const idProduct = e.target.getAttribute('data-id')
        removeItem(idProduct)
    }


    const { addOrder } = useContext(context)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [firstEmail, setFirstEmail] = useState('')
    const [secondEmail, setSecondEmail] = useState('')
    
    
    const checkEmail = (email1, email2) => email1 === email2

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!checkEmail(firstEmail, secondEmail)) {
            Toast.fire({
                icon: 'error',
                title: 'Los correos no coinciden. Por favor verifique.'
              })
              return
        }

        const customerData = {
            firstName,
            lastName,
            phone,
            email:firstEmail       
        }
        e.target.reset()
        addOrder(customerData)
    }



    return(
        <>
            <div className='cart-container'>
                {cart.length 
                    ? <div className='cart-info'>
                            <div className='products-container'>
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
                            <span className='total'>Total: ${total}</span>
                            </div>
                            <form className='customer-data-form' onSubmit={handleSubmit}>
                                <input required type='text' onChange={(e) => setFirstName(e.target.value)}></input>
                                <label>NOMBRE</label>
                                <input required type='text' onChange={(e) => setLastName(e.target.value)}></input>
                                <label>APELLIDO</label>
                                <input required type='number' onChange={(e) => setPhone(e.target.value)}></input>
                                <label>TELEFONO</label>
                                <input required type='email' onChange={(e) => setFirstEmail(e.target.value)}></input>
                                <label>CORREO ELECTRÓNICO</label>
                                <input required type='email' onChange={(e) => setSecondEmail(e.target.value)}></input>
                                <label>REINGRESE CORREO ELECTRÓNICO</label>
                                <br/>
                                <br/>
                                <input className='customer-data-form-submit btn' type='submit' value='Finalizar compra' ></input>
                            </form>
                        
                        
                        </div>
                        
                    : <div className='empty-cart'>
                            <h2 className='empty-cart-title'>El carrito de compras está vacío</h2>
                            <p className='empty-cart-description'>Parece que aun no has seleccionado ningun producto. No te preoucpes, podés darte una vuelta por la tienda y elegir lo que quieras</p>
                            <Link className='empty-cart-button' to='/'>Descubrir productos</Link>
                        </div>}
            </div>
            <span className='clearButton' onClick={clear}>Vaciar carrito</span>

        </>
    )
}
export default Cart
