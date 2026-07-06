//Await Keyword: it is used in the Async Function. It is pause the execution of Async Function until the Promise is settled (Resolved and Rejected). It Pause only the Current Async Function not the entire JS thread.

//Example of without using Await keyword-----------------
function getName1(){
    return Promise.resolve("Gagan")
}
async function main1() {
    const result =  getName1()
    console.log("Without using await: ",result);
}
main1()
/**
 * Output: Promise {<fulfilled>: 'Gagan'}
 *         [PromiseState]: "fulfilled"
 *         [PromiseResult]: "Gagan"
 *  
 */


//Example of using Await keyword for Resolve Promise------------
function getName2(name){
    return Promise.resolve(name)
}

async function main2(name) {
    const result = await getName2(name)
    console.log("using await: ",result);
    
}
main2("Dishaa")
/**
 * Output: Dishaa {Because await unwraps the Promise and gives you its resolved value.}
 * Internally main() function convert like:
 *  function main(name){
 *      const result = Promise.resolve(name)
 *      result.then((val)=>{
 *          console.log(val); //print the name not promise
 *      })
 *  }
 * main("Dishaaa")
 */

//Example of using Await keyword for Rejected Promise--------
function getName3(name){
    return Promise.reject(new Error("Something Wrong!"))
}
async function main3(name) {
    const res = await getName3(name)
    console.log("Using await: ",res);
    
}
main3("Gagan")