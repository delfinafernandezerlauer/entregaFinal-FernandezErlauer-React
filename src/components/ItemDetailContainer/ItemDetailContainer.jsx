import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId, pedirProducts } from "../../helpers/pedirProducts";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const id = useParams().id;
  const [item, setItem] = useState(null);


  useEffect(() => {
    const docRef= doc(db, "products", id)
    getDoc(docRef)
      .then((resp)=>{
        setItem({...resp.data(), id: resp.id})
      })
  }, [id]);
  

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
};
