import cart from '../../cart.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../CartContext/CartProvider'

const CartWidget = () => {

    const { quantity } = useContext(context)
    

    return(
        <Link to='/cart' className='cart'>
            <img src={cart} alt='cart logo' className='cartLogo' />
            <span className='notification'>{quantity}</span>
        </Link>
    )
}
export default CartWidget