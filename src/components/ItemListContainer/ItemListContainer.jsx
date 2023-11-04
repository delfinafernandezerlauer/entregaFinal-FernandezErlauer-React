import { useEffect } from "react";
import { useState } from "react";
import { pedirProducts } from "../../helpers/pedirProducts";

import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import  {collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../firebase/config";


export const ItemListContainer=()=>{
    
  const [products, setProducts]=useState([]);
  const category = useParams().category
  const [title,setTitle]=useState("Products")

  useEffect(()=>{
      
    const productsRef = collection(db, "products")

    const q= category ? query(productsRef, where("category", "==", category)) :productsRef

    getDocs(q)
      .then((resp)=>{
        console.log(resp.docs[0].data())

        setProducts(
          resp.docs.map((doc)=>{
            return{...doc.data(), id:doc.id}
          })
        )
      })
   
  },[category])

  return (
    <div className="">
      <ItemList products={products} title={title}/>
    </div>
  );
}

