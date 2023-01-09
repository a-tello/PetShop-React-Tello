import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/ItemDetail'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        setTimeout(() => {
            fetch('/data.json')
                .then((response) => response.json())
                .then((data) => {
                    const productSelected = data.find((prod) => prod.id === productId)
                    setProduct(productSelected)})
        },2000)
    },[])


    return (
        <div className='container-item-detail'>
            <ItemDetail product={product} />
        </div>
    )


}


export default ItemDetailContainer