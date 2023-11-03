import './App.css'
import NavBar from './components/NavBar/NavBar';

import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { ContactUs } from './components/ContactUs/ContactUs';
import { About } from './components/About/About';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext, CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';

function App() {
  

  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <NavBar/>
        
          <Header/>

          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer/>} />
            <Route path="/products" element={<ItemListContainer/>} />
            <Route path="/products/:category" element={<ItemListContainer/>}/>  
            <Route path="/ContactUs" element={<ContactUs/>}/> 
            <Route path="/About" element={<About/>}/> 
            <Route path="/carrito" element={<Carrito/>}/> 
            <Route path="/checkout" element={<Checkout/>}/> 
        

          </Routes>
        </BrowserRouter>

      </CartProvider>
  </div>
     
  )
}

export default App
