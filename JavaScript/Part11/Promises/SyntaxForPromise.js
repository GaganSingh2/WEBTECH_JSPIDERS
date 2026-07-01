//Syntax for Creation of Promise---------
/*let promiseName = new Promise((resolve, reject)=>{

}) */
/*where
    The Constructor recive a callBack with 
    resolve() -> Operation Completed Successfully
    reject() -> Operation is failed
*/

//Example of Success()-----
let successPromise = new Promise((resolve, reject)=>{
    resolve("Data Fetched Successfully!")
})

console.log(successPromise);


//Example of Reject()-------
let rejectPromise = new Promise((resolve, reject)=>{
    reject("Server Error, Rejected!")
})

console.log(rejectPromise);
