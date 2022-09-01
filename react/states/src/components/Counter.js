import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrease}>Decrase</button>
            <button onClick={increase} >Incrase</button>
        </div>
    )
}

export default Counter