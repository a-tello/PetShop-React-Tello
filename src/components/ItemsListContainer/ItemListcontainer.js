import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, query, where } from 'firebase/firestore'
import { productsCollection } from '../../firebase-config'



const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])
    const { categoryName } = useParams()


    

    useEffect(() => {
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
                })
            
                /* fetch('/data.json')
                .then((response) => response.json())
                .then((data) => {

                    const filterProdcuts = data.filter((product) => product.category === categoryName)
                    
                    setProducts(productList)
                    console.log(productList);}) */
 


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