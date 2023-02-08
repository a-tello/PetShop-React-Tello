import { getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import { productsCollection } from "../../firebase-config"
import ItemDetail from '../itemDetail/ItemDetail'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    const { productId } = useParams()

    useEffect(() => {
        setTimeout(() => {

            const selectedProduct = doc(productsCollection, productId)
            
            getDoc(selectedProduct)
                .then((response) => {
                    setProduct(response.data())
                    setLoading(false)
                })

        },2000)
    },[productId])


    return (
        <div className='container-item-detail'>
            {loading 
            ? <PulseLoader size={50} color="#4E4E7E" />
            : <ItemDetail product={product} id={productId} />}
        </div>
    )


}


export default ItemDetailContainer