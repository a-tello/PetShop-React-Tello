import { useState } from "react";
import './itemCounter.css'


const ItemCount = ({ maxValue, handleAdd }) => {

    const [quantity, setQuantity] = useState(1)

    const addProduct = () => quantity === maxValue ? null : setQuantity(quantity + 1)
    const removeProdcut = () => quantity === 1 ?  null : setQuantity(quantity - 1)

    const handleClick = () => {
        handleAdd(quantity)
    }

    return (
        <div className='counter-container'>
            <div className='counter-display'>
            <button className={`${quantity === 1 ? 'disabled-counter-btn' : 'counter-btn'}`} onClick={removeProdcut}>-</button>
            <span>{quantity}</span>
            <button className={`${quantity === maxValue ? 'disabled-counter-btn' : 'counter-btn'}`} onClick={addProduct}>+</button>
            </div>
            <button className='btn' onClick={handleClick}>Agregar al carrito</button>
        </div>

    )
};

export default ItemCount