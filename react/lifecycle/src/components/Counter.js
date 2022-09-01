import React from 'react'
import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState('Cengiz')

    useEffect(() => {
        console.log('number state update')
    }, [number])

    useEffect(() => {
        console.log('name state update')
    }, [name])

    useEffect(() => {
        console.log('Componenet mount edildi')

        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>

            <hr />

            <h1>{name}</h1>
            <button onClick={() => setName('Cngz')}>Click</button>

        </div>
    )
}

export default Counter