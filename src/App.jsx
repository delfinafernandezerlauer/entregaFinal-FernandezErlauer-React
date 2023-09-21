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
    <div>
    <NavBar/>
    </div>

    <div>
    <Header/>
    </div>
    <div>
      <ItemListContainer greeting="This is an ItemListContainer"/>
    </div>

    <div>
      <p>Esto es una prueba de contador</p>
      <Counter/>

    </div>
    
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

{/* 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div> */}
{/* 
      <div className='row '>
        
        <div className='col-lg-4' >
          <CardUser name="Nombre" description="caption" /> 
        </div>

      </div> */}
      
      
    </>
  )
}

export default App
