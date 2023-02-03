import { getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productsCollection } from "../../firebase-config"
import ItemDetail from '../itemDetail/ItemDetail'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        setTimeout(() => {

            const selectedProduct = doc(productsCollection, productId)
            
            getDoc(selectedProduct)
                .then((response) => {
                    setProduct(response.data())
                })


            /* fetch('/data.json')
                .then((response) => response.json())
                .then((data) => {
                    const productSelected = data.find((prod) => prod.id === productId)
                    setProduct(productSelected)}) */
        },2000)
    },[])


    return (
        <div className='container-item-detail'>
            <ItemDetail product={product} />
        </div>
    )


}


export default ItemDetailContainer