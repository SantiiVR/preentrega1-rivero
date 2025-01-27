import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import itemsDetails from "../ItemDetail/ItemsDetail";
import { useParams } from "react-router-dom";
import item from "../Item/Item";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const{itemId}= useParams ()

  useEffect(() => {
    getProductsById(itemId)
    .them(response => {
        setProduct(response)
    })
    .catch (error => {
    console.error (error)
    })
},[itemId])

return(
    <div>
        <itemsDetails {...product}/>
    </div>
)
}

export default ItemDetailContainer