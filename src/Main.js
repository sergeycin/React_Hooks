import React from 'react'

export default function Main({toggle}) {
    return (
        <>
        <h1>Привет в примере с контекстом</h1> 
        <button onClick={toggle} className="btn">Показать alert</button>
        </>
    )
}