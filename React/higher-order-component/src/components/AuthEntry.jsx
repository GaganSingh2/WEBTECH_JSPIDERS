import React from 'react'

function AuthEntry(Component) {
  return function(props){
    console.log(props);
    
    const isValid = true
    if(!isValid){
        return <h1>Sorry, You Are Not Allowed To Enter In Class!!</h1>
    }
    return <Component {...props} />
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