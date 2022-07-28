import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Login from './components/Login'
import SelectedItems from './components/SelectedItems'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext'


function App() {

  // We can put out products and fuctionalities here and pass them as a
  // props BUT it is better to create a contexAPI(a store) 
  // move your state completely out of this App.js

  return (
    <div className="App">

      <CartProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/selectedItems" element={<SelectedItems />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>

      </CartProvider>

    </div>
  );
}

export default App;
