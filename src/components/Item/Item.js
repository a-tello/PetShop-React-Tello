import { Link } from 'react-router-dom'
import './item.css'

const Item = ({ product }) => {
    return(
    <Link className='item' to={`/item/${product.id}`}>
        <img className='item-img' src={product.img} alt='imagen producto'/>
        <h3>{product.name}</h3>
        <span className='item-category'>*{product.category}</span>
        <span className='item-price'>${product.price}</span>
        <span className={`item-stock ${product.stock > 5 ? 'available' : 'low-stock'}`}>
            Disponibles: {product.stock}</span>
    </Link>)}

export default Item