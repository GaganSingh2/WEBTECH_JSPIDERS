import React from 'react'
import { useState } from 'react'

//this function execute every time when ever we try to increase the count
//bcz this result not store any where so calculating each time
//we can prevent this problem using useMemo()
function expensiveCalculation(num){
    console.log("Calculating...");
    let res = 0;
    for(let i=0; i<100; i++){
        res += num;
    }
    return res;
}


function CounterWithoutUseMemo() {
    const [count, setCount] = useState(0)
    console.log("Component Rendered");
    
    const result = expensiveCalculation(10)

    const handleIncreament = ()=>{
        setCount(count + 1)
    }

  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={handleIncreament}>Increment</button>
        <h1>Result - {result}</h1>
    </div>
  )
}

export default CounterWithoutUseMemo