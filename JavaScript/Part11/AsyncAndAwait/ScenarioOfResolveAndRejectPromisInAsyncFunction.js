//All the Common scenarios, where i get Resolve and Reject Promise using Async Function?

//Resolve Promise Scenarios-----------------
//1) return inside async function -> Resolve Promise
async function greet1() {
    return "Resolved-1"
}
console.log(greet1());
/**
 * Output: Promise {<fulfilled>: 'Resolved'}
 *         [PromiseState]: "fulfilled"
 *         [PromiseResult]: "Resolved"
 */

//2)No return statement inside async function -> Resolve Promise with undefined
async function greet2() {
    return "Resolved-2"
}
console.log(greet2());
/**
 * Output: Promise {<fulfilled>: undefined}
 *         [PromiseState]: "fulfilled"
 *         [PromiseResult]: undefined
 *  undefined bcz here didn't return statement inside the async function.
 */

//3)Return another Promise Explicitly that Resolve Promise
async function greet3() {
    return Promise.resolve("Resolved-3")
}
console.log(greet3());
/**
 * Output: Promise {<pending>: i}//Pending bcz it is return Promise immediately not waiting for calling
 *         [PromiseState]: "fulfilled"//Promise got resolve so after that it will return as fulfilled
 *         [PromiseResult]: "Resolved-3"
 *  
 */

//Reject Promise Scenarios-----------------
//1)Throw an Error -> Rejected Promise
async function greet4() {
    throw new Error("Invalid!")
}
console.log(greet4());
/**
 * Output: Promise {<rejected>: Error: Invalid}
 *         [PromiseState]: "rejected"
 *         [PromiseResult]: Error: Invalid
 * Internally JS: 
 * convert throw new Error("Invalid") => return  Promise.reject(new Error("Invalid"))
 */

//2)Explicitly return the Reject Promise
async function greet5() {
    return Promise.reject("Invalid!")
}
console.log(greet5());
/**
 * Output: Promise {<pending>: i}//Pending bcz it is return Promise immediately not waiting for calling
 *         [PromiseState]: "rejected"//Promise got resolve so after that it will return as fulfilled
 *         [PromiseResult]: "Invalid"
 *  
 */