function demo() {
    console.log("Demo Function");
}
demo()


hello()
function hello() {
    console.log("Hello Function");
}

// tmp() //if we call here then it will throw error bcz currently tmp is not initialize and we try to call as function
let tmp = function(){
    console.log("Tmp Function");
}
tmp() //this one execute bcz currently tmp store Annonymous function 