import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action)=>{
    switch (action.type) {
        case "increment":
            return state+1
            break;
        case "decrement":
            return (state > 0? state -1 : 0)
            break;
        case "reset":
            return state = 0;
            break; 
        default:
            return state = -1;
            break;
    }
}
function CounterUsingUseReducer() {
    const[count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={()=> dispatch({type: "increment"})}>Increment</button>{" "}
        <button onClick={()=> dispatch({type: "decrement"})}>Decrement</button>{" "}
        <button onClick={()=> dispatch({type: "reset"})}>Reset</button>
        {" "}
        <button onClick={()=> dispatch({type:""})}>Invalid</button>
    </div>
  )
}

export default CounterUsingUseReducer