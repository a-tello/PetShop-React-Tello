import { useState } from "react";
import './itemCounter.css'


const ItemCount = ({ maxValue }) => {

    const [quantity, setQuantity] = useState(1)

    const addProduct = () => quantity == maxValue ? null : setQuantity(quantity + 1)
    
    const removeProdcut = () => quantity == 1 ?  null : setQuantity(quantity - 1)

    return (
        <div className='counter'>
            <button onClick={removeProdcut}>-</button>
            <span>{quantity}</span>
            <button onClick={addProduct}>+</button>
        </div>

    )
};

export default ItemCount