import cart from '../../cart.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({quantity = 3}) => {
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