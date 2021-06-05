import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Shop() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json()
        setItems(items)
        console.log(items)
    }

  return (
    <div>
      {items.map(item => (
          <h1 key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
              </h1>
      ))}
    </div>
  );
}

export default Shop;
