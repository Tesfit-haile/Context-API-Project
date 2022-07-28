import React from 'react'
import Cart from './Cart'
import { CartContext } from '../CartContext'
import { useContext } from 'react'




function Checkout() {
    const { items } = useContext(CartContext);

    return (
        <>
            <h2>Selected Products</h2>
            <div className='container'>
                {/* {items.map((item) => (
                    <div>
                        <h2>{item.name}</h2>
                        <h2>{item.price}</h2>
                    </div>


                ))} */}



                <table class="table table-bordered table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {items.map((item, ix) => (
                        <tbody>
                            <tr>
                                <th scope="row">{ix + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>


                        </tbody>
                    ))}

                </table>
            </div>

        </>
    )
}

export default Checkout