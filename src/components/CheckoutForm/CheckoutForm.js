import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { context } from "../CartContext/CartProvider"
import './checkoutForm.css'


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

  const CheckoutForm = () => {
    
    const { addOrder, cart } = useContext(context)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [firstEmail, setFirstEmail] = useState('')
    const [secondEmail, setSecondEmail] = useState('')
    const navigate = useNavigate()

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
        navigate('/')
    }


    return(
        <>
        {cart.length
            ?   <div className='form-container'>
                    <p>Por favor, complete sus datos para finalizar la compra</p>
                    <form className='customer-data-form' onSubmit={handleSubmit}>
                        <input required type='text' onChange={(e) => setFirstName(e.target.value)}></input>
                        <label>NOMBRE</label>
                        <input required type='text' onChange={(e) => setLastName(e.target.value)}></input>
                        <label>APELLIDO</label>
                        <input required type='number' min='8' onChange={(e) => setPhone(e.target.value)}></input>
                        <label>TELEFONO</label>
                        <input required type='email' onChange={(e) => setFirstEmail(e.target.value)}></input>
                        <label>CORREO ELECTRÓNICO</label>
                        <input required type='email' onChange={(e) => setSecondEmail(e.target.value)}></input>
                        <label>REINGRESE CORREO ELECTRÓNICO</label>
                        <input required type='number' min='13'></input>
                        <label>INGRESE NUMERO DE TARJETA</label>
                        <br/>
                        <br/>
                        <input className='customer-data-form-submit btn' type='submit' value='Comprar' ></input>
                    </form>
                </div>

            :   <div className='empty-cart'>
                    <h2 className='empty-cart-title'>ERROR</h2>
                    <p className='empty-cart-description'>Debe añadir al menos un producto al carrito antes de completar el formulario de compra.</p>
                    <Link className='empty-cart-button' to='/'>Volver a la tienda</Link>
                </div>
        }
        </>
    )
  }

export default CheckoutForm