let h2 = document.querySelector("h2")
let inp = document.querySelector("#text")

inp.addEventListener("input", function(){
    //remove invalid character like num, special symbols
    let validName = inp.value.replace(/[^a-zA-Z ]/g,"")

    //update input value with validName
    inp.value = validName

    //show on the screen
    h2.innerText = "Hello, " + inp.value
})