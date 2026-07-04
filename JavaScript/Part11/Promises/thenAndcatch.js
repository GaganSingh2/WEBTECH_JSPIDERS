//.then(): is used to handle the fulfilled(Resolve) state of a promise.
//promiseObj.then(Success work)

function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1
        if(internetSpeed > 4){
            resolve("Success: Data "+data+ " Was Saved!")
        }
        else{
            reject("Failed: Weak Connection!")
        }
    })
}
let request = saveToDB("Apna College")
// console.log(request);
request.then((result)=>{
    console.log(result);
    // console.log(request);
    
})
.catch((error)=>{
    console.log(error);
    // console.log(request); 
})
