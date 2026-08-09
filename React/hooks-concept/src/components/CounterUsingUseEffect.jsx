import React,{useState, useEffect} from 'react'

function CounterUsingUseEffect() {
    const [num, setNum] = useState(0)
    const [name, setName] = useState("Gagan")

    //1)Empty Dependency Array([]) {Runs Only once in lifetime when application will start}--------
    useEffect(()=>{
        console.log("Runs only once");
        document.title = `Notifications - (${num})` 
    },[])

    //2)No Dependency Array {it is runs on every rendering}---------
    // it is runs after every rendering i.e whenever the component render for any reason, the useEffect() runs.
    //it will runs when we change num using setNum and change name using setName. unnecessary rendering.
    useEffect(()=>{
        //it runs if any rendering happened in UI
        console.log("Runs on Every Render");
    })

    //3)Dependency with Variable in Array([someState/variable])----------
    //but it is runs only when the num change i.e. only when state(num) or dependency array(num) change then useEffect() runs.
    //but it will runs only when we change in num using setNum, but if we change name using setName it will not run. avoid more effect rendering
    useEffect(()=>{
        //it runs only if the num is change.
        console.log("Runs on Every Changes");
    },[num])


    // console.log("Component Created");
    const handleNumber = ()=>{
        setNum(num+1)
    }
    
    const handleName = ()=>{
        setName("Dishaaa")
    }
  return (
    <div>
        <h1>Effect - {num}</h1>
        <button onClick={handleNumber}>Click</button> {" "}
        <h2>Name - {name}</h2>
        <button onClick={handleName}>Name</button>
    </div>
  )
}

export default CounterUsingUseEffect