import { useState } from 'react'
import './App.css'
// import { Usuario } from './components/Usuario';
//import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


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
