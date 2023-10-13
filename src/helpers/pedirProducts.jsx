
import data from "../data/products.json"

export const  pedirProducts=()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve(data)
    },500)
  })
}


export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
      
      const product = data.find((el) => el.id === id);

      if (product) {
          resolve(product);
      } else {
          reject({
              error: "No se encontró el producto"
          })
      }
    })}