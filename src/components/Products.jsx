import React, { useState } from 'react'
import Cart from './Cart'


function Products() {

    const [products, setProducts] = useState([
        { name: 'cat-1', price: 20 },
        { name: 'cat-2', price: 30 },
        { name: 'cat-3', price: 70 },
        { name: 'cat-4', price: 90 },
        { name: 'cat-5', price: 50 },
        { name: 'cat-6', price: 60 }
    ])

    return (
        <div className='container d-flex flex-wrap'>
            {products.map(product => (
                <Cart name={product.name} price={product.price} key={product.price} />
            ))}
        </div>
    )
}

export default Products