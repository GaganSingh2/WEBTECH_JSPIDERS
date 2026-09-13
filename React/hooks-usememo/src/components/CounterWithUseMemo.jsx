import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'


function expensiveCalculation(num){
    console.log("Calculating..");
    let res = 0;
    for(let i=0; i<100; i++){
        res += num
    }
    return res
    
}
function CounterWithUseMemo() {
    const [count, setCount] = useState(0)

    console.log("Component Rendered..");
    
    const res = useMemo(()=>{
        console.log("Getting from Cache");
        /**
         * if i passing the same input each time so it just compute calculation only 1st time and store in cache. after that at each re-rendering it return the data that is stored in cache.
         * Output on Console (one 1st rendering)
         *      1)Component Rendered..
         *      2)Getting from cache
         *      3)Calculating..
         * 
         * after that if u click on Increment button 100 times also the output only on console is
         *      1)Component Rendered.. (bcz u are getting expensiveCalculation result from cache)
         * 
         * but it is compute/calculate again if u change the value that is passed in expensiveCalculation(10) to expensiveCalculation(20)
         * so after that again u see output on console like that and so on..
         *      1)Component Rendered..
         *      2)Getting from cache
         *      3)Calculating..
         */
        return expensiveCalculation(10);
        // return expensiveCalculation(20)
    },[])

    const handleIncreament = ()=>{
        setCount(count + 1)
    }
  return (
    <div>
        <h1>Count - {count}</h1>
        <h2>Result - {res}</h2>
        <button onClick={handleIncreament}>Increment</button>
    </div>
  )
}

export default CounterWithUseMemo