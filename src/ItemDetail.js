import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function ItemDetail({match}) {

    useEffect(() => {
        fetchItem()
        console.log(match)
    }, [])

    const [item, setItem] = useState([])

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await data.json()
        setItem(item)
        console.log(item)
    }

  return (
    <div>
      {item.description}
      <img src={item.image} />
    </div>
  );
}

export default ItemDetail;
