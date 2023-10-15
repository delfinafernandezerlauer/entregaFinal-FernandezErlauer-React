import { useEffect } from "react";
import { useState } from "react";
import { pedirProducts } from "../../helpers/pedirProducts";
import { Counter } from "../Counter/Counter";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export const ItemListContainer=()=>{
    
  const [products, setProducts]=useState([]);
  const category = useParams().category
  const [title,setTitle]=useState("Productos")

  useEffect(()=>{
      
    pedirProducts()
    .then((res)=>{
      if(category){
        setProducts(res.filter((prod)=> prod.category ===category));
        setTitle(category)
      }
      else {
        setProducts(res);
        setTitle("Productos")
      }
       
    })
  },[category])

  return (
    <div>
      <ItemList products={products} title={title}/>
    </div>
  );
}

