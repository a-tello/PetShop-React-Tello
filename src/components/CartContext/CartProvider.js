import { createContext, useState } from "react";

export const context = createContext()
const { Provider } = context

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)


    const addItem = (item, productQuantity) => {

        const addedProduct = isInCart(item.id)
        let totalNuevo
        let cantidadNuevo
        if (addedProduct) {
            addedProduct.quantity = productQuantity
            totalNuevo = cart.reduce((a,b) => a+ b.quantity*b.price,0)
            cantidadNuevo = cart.reduce((a,b) => a+ b.quantity,0)
        } else {
            item.quantity = productQuantity
            const newCart = [...cart]
            newCart.push(item)
            setCart(newCart)
        }

        
        setQuantity(cantidadNuevo || quantity + productQuantity)
        setTotal(totalNuevo || total + productQuantity * item.price)
    }

    const removeItem = (itemId) =>{
        const newCart = cart.filter((product) => product.id !== itemId)
        setCart(newCart)
        setQuantity(newCart.reduce((a,b) => a+ b.quantity,0))
        setTotal(newCart.reduce((a,b) => a+ b.quantity*b.price,0))
    }
    
    const clear = () =>{
        setCart([])
        setQuantity(0)
        setTotal(0)
    }
    
    const isInCart = productId => cart.find(({ id }) => id === productId)

    const contextValue = {
        cart,
        quantity,
        total,
        addItem,
        removeItem,
        clear
    }

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider