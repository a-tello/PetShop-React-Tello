import { useContext, useState } from "react"
import { context } from "../CartContext/CartProvider"
import './orderForm.css'
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
  

const OrderForm = () => {
    
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
            <input className='customer-data-form-submit' type='submit' ></input>
        </form>
    )
    
}


export default OrderForm
