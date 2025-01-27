import { useState } from "react";
import itemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const itemsDetails = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    }

    return (
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    categoria: {category}
                </p>
                <p>
                    descripcion: {description}
                </p>
                <p>
                    precio: ${price}
                </p>
            </section>

            <footer>
                {quantityAdded > 0 ? (
                
                <Link to="/cart"/> Finalizar compra </Link>
                    
                ): (
                    itemCount initial={1} stock=(stock) onAdd=(handleOnAdd)
                )
                }
            </footer>
        </article>
    )
}

export default itemsDetails