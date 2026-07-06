//Internal Working Of Await Keyword----------

//WIthout using await keyword--------
// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Data Resolved!")
//         },1000)
//     })
// }

// async function main() {
//     console.log("1");

//     const result = getData()

//     console.log(result);
    
//     console.log("2");
// }
// main()
// console.log("3");

/**
 * Output:---
 * 1
 *
 * Promise {<pending>: i}
 *         [PromiseState]: "fulfilled"
 *         [PromiseResult]: "Data Rsolved"
 *  
 * 2
 * 3
 */

//With using await Keyword-------
function getData1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data Resolved!")
        },1000)
    })
}

async function main2() {
    console.log("1");

    const result = await getData1()//stop here, but not stop whole JS THread only stop main2() function or current Async Function

    console.log(result);
    
    console.log("2");
}
main2()
console.log("3");
/**
 * Output:-----
 * 
 * 1
 * 3
 * Data Resolved (Value not Promise)
 * 2
 */