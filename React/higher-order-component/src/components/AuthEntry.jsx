import React from 'react'

function AuthEntry(Component) {
  return function(props){
    console.log(props);
    
    const isValid = true
    if(!isValid){
        return <h1>Sorry, You Are Not Allowed To Enter In Class!!</h1>
    }
    return <Component {...props} greet="Have a Good day" />
  }
}

export default AuthEntry

/**
 * Syntax:--
 * function HigherOrder(Component){
 *  return function(){
 *      return <Component />
 *  }
 * }
 */


//For Student---------
// return function AuthenticatedStudent(props){
//     console.log(props);
    
//     const isValid = true
//     if(!isValid){
//         return <h1>Sorry, You Are Not Allowed To Enter In Class!!</h1>
//     }
//     return <Student {...props} greet="Have a Good day" />
//   }


//For Trainer
// return function AuthenticatedTrainer(props){
//     console.log(props);
    
//     const isValid = true
//     if(!isValid){
//         return <h1>Sorry, You Are Not Allowed To Enter In Class!!</h1>
//     }
//     return <Trainer {...props} greet="Have a Good day" />
//   }