import React from 'react'
import { CartContext } from '../CartContext'
import { useContext } from 'react'



export default function Login() {

    const { items, tax, addToCart } = useContext(CartContext)
    return (
        <>

            <h1>Login page...</h1>
            <h4>Number of items that has been selected are : {items.length}</h4>
            <p>This is tax in British Columbia :- {tax}</p>
        </>
    )
}
