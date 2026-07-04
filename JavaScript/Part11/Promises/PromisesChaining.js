// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1 //1 to 10
//     if (internetSpeed > 4) {
//         // console.log("Your Data was Saved: "+data);
//         success(data)
//     } else {
//         // console.log("Weak Connection! Data not saved!");
//         failure()
//     }

// }


// saveToDB("Apnaa College", 
//     (data) => { //if this condition is true, then execute
//         console.log("Success, Your Data was Saved: " + data);
//         //then this inner function will execute
//         saveToDB("Gagan", 
//             //if this condition is true, then execute
//             (data) => {
//                 console.log("Success, Your Data was Saved: " + data);
                
//                 saveToDB("Dishaa", 
//                     //if this condition is true, then execute
//                     (data)=>{
//                         console.log("Success, Your Data was Saved: " + data);
//                     },
//                     //otherwise this function will execute
//                     ()=>{
//                         console.log("Failure, Weak Connection! Data not saved!");
//                     }
//                 )
//             }, 
//             //otherwise this function will execute
//             () => {
//                 console.log("Failure, Weak Connection! Data not saved!");
//             }
//         )
//     }, 
//     //Otherwise this function will execute
//     () => {
//         console.log("Failure, Weak Connection! Data not saved!");
//     }
// )

//this situation is called as CallBack Hell.
//to overcome this problem we used Promises Chaining.

function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1
        if(internetSpeed > 4){
            resolve("Success: Data "+data+" Was Saved!")
        }
        else{
            reject("Failed: Weak Connection!")
        }
    })
}

//Overcome CallBack Hell using Promise Chaining
let req = saveToDB("Apna College")
req.then((result)=>{
    console.log(result);
    return saveToDB("Gagan")
})
.then((result)=>{
    console.log(result);
    return saveToDB("Dishaaaa")
})
.then((result)=>{
    console.log(result+" In Heart");
})
// .then(()=>{ //we can directly throw our own error/exception
//     throw "Database Error!"
// })
.catch((error)=>{
    console.log(error);
    
})