import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "../redux/counter/counterSlice";

function Counter() {
    const [amount, setAmount] = useState(3)
    const countValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{countValue}</h1> <br />
            <button onClick={() => dispatch(increment())}>Increment</button><br />
            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <br /><br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementBy(amount))}>Increment By Amount</button><br />

        </div>
    )
}

export default Counter