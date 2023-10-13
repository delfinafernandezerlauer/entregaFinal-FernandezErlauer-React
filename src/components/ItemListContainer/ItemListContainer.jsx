import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { pedirProducts } from "../../helpers/pedirProducts";
import { Counter } from "../Counter/Counter";
import { Link } from "react-router-dom";


export const ItemListContainer=()=>{
    
  const [products, setProducts]=useState([]);

  useEffect(()=>{
      
    pedirProducts()
    .then((res)=>{
      setProducts(res);
    })
  },[])

  return (
  <div>
    
    <div>
            <div>
                <h2>Productos</h2>
            </div>
                
            <div className="row">

                {products.length>0 && 

                products.map((products)=>
                <div key={products.id} className="col-lg-4 border p-4">
                <img src={products.image} alt="" />
                <h4 className="bold">{products.name}</h4>
                <p>${products.price}</p>
                <p>Size: {products.size}</p>
                <p>color {products.color}</p>
                <Counter/>
              
                <Link to={`/detail/${products.id}`}>Ver Mas</Link> 
                
        </div>    
                )
                }
                </div>

</div>
  </div>
  );
}

