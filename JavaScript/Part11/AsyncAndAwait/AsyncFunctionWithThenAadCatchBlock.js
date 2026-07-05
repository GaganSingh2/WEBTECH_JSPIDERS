async function greet() {
    // throw new Error("Something Went Wrong!")
    return "Hello EveryOne....!"
}

let req = greet()
req.then((result)=>{
    console.log("Promise Was Resolved: ",result); 
})
.catch((error)=>{
    console.log("Promise Was Rejected Bcz: ",error);
})