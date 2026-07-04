

// //Use Promise
function saveToDBB(data){
    let promise = new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10)+1;
        if(internetSpeed > 4){
            resolve("Success: Data Was Saved!");
        }
        else{
            reject("Failure: Weak Connection!");
        }
    });
    console.log(promise);
    
}

//Optimize the CallBack Hell function using Promise
saveToDBB("Apna College")