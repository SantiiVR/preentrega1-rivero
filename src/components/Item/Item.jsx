import { Link } from "react-router-dom"


const item = ({id, name, img, price, stock}) => {
  return
<article>
    <header>
        <h2>
            {name} 
        </h2>
    </header>
    <picture>
        <img src={img} alt={name} />
    </picture>
    <section>
        <p>precio: ${price}</p>
        <p>stock disponible: {stock} </p>
    </section>

    <footer>
        <Link to={`/item/${id}`} >Ver detalles</Link>
    </footer>
</article>
}

export default item