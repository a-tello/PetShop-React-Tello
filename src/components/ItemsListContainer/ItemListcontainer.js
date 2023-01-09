import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        setTimeout(() => {
            fetch('/data.json')
                .then((response) => response.json())
                .then((data) => {
                    const filterProdcuts = data.filter((product) => product.category === categoryName)
                    const productList = categoryName ? filterProdcuts : data
                    setProducts(productList)})
        },2000)
    },[categoryName])
    

    return (
        <>
            <div className='itemContainer'>{greeting}</div>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer