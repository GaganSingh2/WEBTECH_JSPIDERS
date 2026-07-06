//Create Async Function
/**
 * async function functionName(){
 *      //Statement
 * }
 */
//it always return a Promise

//Example of Resolve Promise with value
async function greet() {
    return "Hello"
}
console.log(greet());
/**
 * Output: Promise {<fulfilled>: 'Hello'}
 *         [PromiseState]: "fulfilled"
 *         [PromiseResult]: 'Hello'
 *  undefined bcz here didn't return any value.
 */

//Example of Resolve Promise without value means undefined
async function hello() {
    console.log("Hiiiiii");
}
console.log(hello());
/**
 * Output: Promise {<fulfilled>: undefined}
 *         [PromiseState]: "fulfilled"
 *         [PromiseResult]: undefined
 *  undefined bcz here didn't return any value.
 */

//Example of Reject Promise
async function hiii() {
    throw new Error("Something Went Wrong!")
    return "Hiiiiii"
}
console.log(hiii());
/**
 * Output: Promise {<rejected>: Error: Something Went Wrong}
 *         [PromiseState]: "rejected"
 *         [PromiseResult]: Error: Something Went Wrong
 * 
 */