import { createContext, useState } from "react";


export const context = createContext()

const { Provider } = context

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)


    const addItem = (item, productQuantity) =>{

        item.quantity = productQuantity
        setCart([item])
        setQuantity(quantity + productQuantity)
        setTotal(total + productQuantity * item.price)
    }

    const removeItem = (itemId) =>{}
    
    const clear = () =>{
        setCart([])
        setQuantity(0)
        setTotal(0)
    }
    
    const isInCart = (id) =>{}

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