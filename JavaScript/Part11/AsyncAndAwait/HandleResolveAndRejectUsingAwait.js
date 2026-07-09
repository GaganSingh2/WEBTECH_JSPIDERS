function login(password){
    return new Promise((resolve, reject)=>{
        if(password === "admin@123"){
            resolve("Login Successfully!")
        }
        else{
            reject("Invalid Password!")
        }
    })
}


async function userLogin(password) {
    try{
        let result = await login(password)
        console.log(result);
    }
    catch(error){
        console.log(error);
        
    }
}
// userLogin("admin@123") //Login Successfully
userLogin("Admin@123") //Invalid Password