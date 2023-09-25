import { useEffect } from "react";
import { useState } from "react";
import data from "../../data/products.json"
import { Counter } from "../Counter/Counter";

export const ItemListContainer=()=>{
    
  const [products, setProducts]=useState([]);


  const pedirProducts=()=>{
    return new Promise((resolve, reject)=>{
      resolve(data)
    })
  }
  useEffect(()=>{
      
    pedirProducts()
    .then((res)=>{
      setProducts(res);
    })
  },[])

  return (
  <div>
    <h3 className="p-5">Products</h3>
    <div className="row">
    
    {products.length>0 && 
   
    products.map((product)=>{
      return (
        
        <div key={product.id} className="col-lg-4 border p-4">
          <h4>{product.name}</h4>
          <img src={product.image} alt="" />
          <p>${product.price}</p>
          <p>talle: {product.talle}</p>
          <p>color {product.color}</p>
          <Counter/>
        </div>
      )
    })
    
    }
    
    </div>
    {/* aca agregar descripcion talle precio etc en un div separado */}
  </div>
  );
}

