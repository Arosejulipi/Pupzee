import React from "react"
import "../itemListContainer/itemListContainer.css"

const ItemListContainer = ( { greeting } ) => {
    return (
        <div>
            <h1 className="item">{greeting} </h1>
        </div>
    )
}
export default ItemListContainer