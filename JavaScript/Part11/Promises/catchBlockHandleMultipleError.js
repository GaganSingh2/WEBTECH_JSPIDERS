//create our own custom error
class AgeError extends Error{
    constructor(message){
        super(message)
        this.name = "AgeError"
    }
}

function validateAge(age){
    return new Promise((resolve, reject)=>{
        if(typeof age !== "number"){
            reject(new TypeError("Age Must Be A Number!"))
            return;
        }
        if (age < 18) {
            reject(new AgeError("Age Must Be At Least 18 For Driving!"))
            return;
        }
        if(age > 60){
            reject(new AgeError("Age Must Be Less Than Of 60 For Driving!"))
            return;
        }
        else{
            resolve("Congrats, You Are Eligible For Driving!")
        }
    })
}

let age = "55"
let validate = validateAge(age)
validate.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    if(error instanceof TypeError){
        console.log("Type Error: ",error.message);
    }
    else if(error instanceof AgeError){
        console.log("Age Error: ",error.message);
    }
    else{
        console.log("Unknown Error: ",error.message);
    }
})