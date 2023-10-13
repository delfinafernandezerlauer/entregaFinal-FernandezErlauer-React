// import { useState } from 'react'
import './App.css'
// import { Usuario } from './components/Usuario';
//import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { ContactUs } from './components/ContactUs/ContactUs';
import { About } from './components/About/About';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
    
      <Header/>

      <Routes>
        
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} /> 
        <Route path="/ContactUs" element={<ContactUs/>}/> 
        
        <Route path="/About" element={<About/>}/> 
        {/* el /item es lo que va a l final del link */}
      </Routes>


    
    </BrowserRouter>
  </div>
     
  )
}

export default App
