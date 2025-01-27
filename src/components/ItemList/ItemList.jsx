import React from 'react'

const ItemList = ({products}) => {
 return (
        <div>
            {products.map(prod => <item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList