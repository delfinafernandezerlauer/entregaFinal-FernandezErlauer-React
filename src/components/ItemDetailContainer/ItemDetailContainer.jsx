import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../../helpers/pedirProducts";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    pedirItemPorId(id)
      .then((res) => {
        setProduct(res);
      });
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};
