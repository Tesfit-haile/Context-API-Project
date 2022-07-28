import { createContext, useState } from "react";



// first create a variable and export it to the App.js file
// TODO this will go to the App.js file then YOU can access from everywhere in the project !!!

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([])
    const [tax, setTax] = useState(1.66)


    const addToCart = (name, price) => {
        setItems((prevState) => [...prevState, { name: name, price: price }])
    }

    return (
        <CartContext.Provider value={{ items, tax, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

// export default CartContext;