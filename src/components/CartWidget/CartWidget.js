import cart from '../../cart.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../CartContext/CartProvider'

const CartWidget = ({hardCodequantity = 3}) => {

    const { quantity } = useContext(context)
    

    return(
        <div className='cart'>
            <Link to='/cart'>
                <img src={cart} alt='cart logo' className='cartLogo' />
                <span className='notification'>{quantity}</span>
            </Link>
        </div>
    )
}
export default CartWidget