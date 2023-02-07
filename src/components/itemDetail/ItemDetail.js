import './itemDetail.css'
import ItemCounter from '../itemCounter/ItemCounter';
import '../CartContext/CartProvider'
import { useContext } from 'react';
import { context } from '../CartContext/CartProvider';

const ItemDetail = ({ product, id }) => {

    const { addItem } = useContext(context)


    const handleAdd = (countQuantity) => {
        product.id = id
        addItem(product, countQuantity)
    }

    return (
    <div className='container'>
        <div className='container-img'>
            <img src={product.img} alt={product.name}/>
        </div>
        <div className='container-info'>
            <span className='category'>*{product.category}</span>
            <h2>{product.name}</h2>
            <span className='price'>${product.price}</span>
            <span>Stock: {product.stock}</span>
            <ItemCounter maxValue={product.stock} handleAdd={handleAdd}/>
            <button className='btn' onClick={addItem}>Agregar al carrito</button>
            <button className='btn'>Comprar</button>
        </div>

    </div> 
    )
}
    

export default ItemDetail