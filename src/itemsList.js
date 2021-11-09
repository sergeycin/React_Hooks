import React from 'react'
import { useEffect, useState } from 'react';

export default function ItemsList({getItems}){
    const [items,setItems] = useState([])
    return (
        useEffect (() => {
            const newItems = getItems()
            setItems(newItems)
        },[getItems])
        <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
    )
}