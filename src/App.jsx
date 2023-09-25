// import { useState } from 'react'
import './App.css'
// import { Usuario } from './components/Usuario';
//import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Counter } from './components/Counter/Counter';
import CardItem from './components/CardItem/CardItem';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>

    <Header/>
    
      <ItemListContainer greeting="This is an ItemListContainer"/>
  
      <p>Esto es una prueba de contador</p>
      <Counter/>
    
    <div className='row m-5'>

      <div className='col-lg-4'> 
      <CardItem name="a" talle="m" color="ne" precio="12" description="1aaaaaaaaaaaa"/>
      </div>

      <div className='col-lg-4'>
      <CardItem name="b" talle="l" color="gr" precio="102" description="bbbbbb"/>
      </div>

      <div className='col-lg-4'>
      <CardItem name="c" talle="H" color="o" precio="222" description="ccccccccc"/>
      </div>

</div>
     
      
    </>
  )
}

export default App
