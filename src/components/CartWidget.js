import cart from '../cart.svg'

const CartWidget = ({quantity = 3}) => {
    return(
        <div className='cart'>
            <a href='#'><img src={cart} alt='cart logo' className='cartLogo' /></a>
            <span className='notification'>{quantity}</span>
        </div>
    )
}


export default CartWidget