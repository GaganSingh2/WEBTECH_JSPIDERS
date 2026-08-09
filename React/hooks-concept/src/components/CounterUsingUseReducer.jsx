import React, { useReducer } from 'react'

const init = 0;
const reduce = (state, action)=>{
    switch (action) {
        case "increment":
            return state+1
            break;
        case "decrement":
            return (state > 0? state -1 : 0)
            break;
        case "reset":
            return state = 0;
        default:
            return state = -1;
            break;
    }
}
function CounterUsingUseReducer() {
    const[count, dispatch] = useReducer(reduce, init)
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={()=> dispatch("increment")}>Increment</button>{" "}
        <button onClick={()=> dispatch("decrement")}>Decrement</button>{" "}
        <button onClick={()=> dispatch("reset")}>Reset</button>
        {" "}
        <button onClick={()=> dispatch()}>Invalid</button>
    </div>
  )
}

export default CounterUsingUseReducer