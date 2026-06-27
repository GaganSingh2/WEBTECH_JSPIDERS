

let form = document.querySelector("form")

// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     alert("Are U Sure?")
//     console.log("Form Submitted");
// })


//Extracting Data from Form-------
// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     let inp = document.querySelector("input")
//     console.dir(inp);
//     console.log(inp.value);
    
// })


form.addEventListener("submit", function(event){
    event.preventDefault()

    //Creating Alert on the message-----------------
    // let user = document.querySelector("#user")
    // let pass = document.querySelector("#pass")
    // // console.dir(inp);
    // console.log("UserName: "+ user.value);
    // console.log("Password: "+pass.value);
    
    // alert(`Hi ${user.value}, your password is set to ${pass.value}`)
})

let user = document.querySelector("#user")

//Create function on evry submit or click on the submit button and screen button
// user.addEventListener("change", function(){
//     console.log("Change Events");
//     console.log("Final Value: "+this.value);
// })

// //Create a function for each input type
// user.addEventListener("input", function(){
//     console.log("Input Event");
//     console.log("Final Value: "+this.value);
    
    
// })


//Create a custome input on the screen
let inp = document.querySelector("#text")
let p = document.querySelector("p")

inp.addEventListener("input", function(){
    console.log("Final Value: "+inp.value);
    p.innerText = inp.value //store in the input in the paragraph 
})