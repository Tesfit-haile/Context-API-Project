import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { useContext } from 'react'




function Navbar() {

    const { items } = useContext(CartContext)

    return (
        <nav className="navbar navbar-dark bg-primary m-1 ">

            <div className="container">
                <Link to={'/'}>
                    <h3 className='p-2 bg-warning text-dark rounded'>Products</h3>
                </Link>

                <Link to={'/selectedItems'}>
                    <h3 className='p-2 bg-warning text-dark rounded'>SelectedItems : {items.length} items</h3>
                </Link>
                <Link to={'/login'}>
                    <h3 className='p-2 bg-warning text-dark rounded'>Login</h3>
                </Link>
            </div>

        </nav>

    )
}

export default Navbar