import React from 'react'
import catImage from '../static/catImage.jpeg'
import { CartContext } from '../CartContext'
import { useContext } from 'react'



function Cart({ name, price }) {

    const { addToCart } = useContext(CartContext)

    return (
        <div className='m-5 hover' onClick={() => addToCart(name, price)}>

            <a href='#'>
                <img src={catImage} alt="" style={{ width: 200, height: 200 }} />
            </a>

            <h2> name: {name}</h2>
            <h4> $ {price}</h4>
        </div >
    )
}

export default Cart