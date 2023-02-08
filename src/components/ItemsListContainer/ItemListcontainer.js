import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, query, where } from 'firebase/firestore'
import { productsCollection } from '../../firebase-config'
import { HashLoader } from "react-spinners"



const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { categoryName } = useParams()


    

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            const filteredProducts = query(productsCollection, where('category','==', categoryName || ''))
            const productsSelection = categoryName ? filteredProducts : productsCollection

           getDocs(productsSelection)
                .then((response) =>  {
                    const productsList = response.docs.map((doc) => {
                        const productInfo = doc.data()
                        productInfo.id = doc.id
                        return productInfo
                    })
                    setProducts(productsList)
                    setLoading(false)
                })

        },2000)
    },[categoryName])
    

    return (
        <div className='item-list-container'>
            <div className='itemContainer'>{greeting}</div>
            {loading 
            ? <HashLoader className='loader' color="#4E4E7E" />
            : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer