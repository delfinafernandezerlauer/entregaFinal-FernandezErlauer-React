import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId, pedirProducts } from "../../helpers/pedirProducts";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const id = useParams().id;
  const [item, setItem] = useState(null);


  useEffect(() => {
    pedirItemPorId(Number(id))
    .then((res)=>{
      setItem(res);
    })
  }, [id]);
  

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
};
