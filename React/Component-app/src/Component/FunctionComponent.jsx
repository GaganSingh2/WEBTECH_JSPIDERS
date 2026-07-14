// Create Functional Component using Named Function
// function FirstFunc(){
//     return <h1>This is my first Functional Component using Named Function</h1>

// }

// Create Functional Component using Annonymous Function
// const FirstFunc1 = function(){
//      return <h1>This is my first Functional Component using Annonymous Function</h1>
// }

//Create Functional Component using Arrow Function
const FirstFunc = ()=>{
    //here we return h1 as 1 jsx
    // return <h1>This is my first Functional Component using Arrow Function</h1>

    //if we want to return more than one jsx at time so here we return 2 jsx h1 and p
    return(
        <>
            <h1>This is my first Functional Component using Arrow Function</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas dolore. Delectus, quibusdam quidem est quas corporis quaerat quam perferendis assumenda magni aut, harum odio dolores ipsam doloremque, distinctio accusamus in? Dolorum, cum ratione rerum culpa odio aliquid iste. Quo?</p>
            
        </>
    )
}

//If we want to export more than one function (others function rather than default function)
export const SecFunc = ()=>{
    return <h1>This is my second function component using export keyword</h1>
}
export default FirstFunc //this is default Function exported
