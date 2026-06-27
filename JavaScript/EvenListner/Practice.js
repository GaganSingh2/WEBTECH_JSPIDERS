// let inp = document.querySelector("#text")

// inp.addEventListener("keypress", function(){
//     console.log("Key Press");
// })

// let btn = document.querySelector("#btn")
// btn.addEventListener("mouseout", function(){
//     console.log("Mouse Out");
// })

// let div = document.querySelector("#div")
// div.addEventListener("scroll", function(){
//     console.log("Scrolling...");
    
// })

// window.addEventListener("load", function(){
//     console.log("Page Loaded Successfully!");
    
// })


// let btn = document.createElement("button")
// btn.innerText = "Click Me"

// document.body.appendChild(btn)

// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "green"
// })

let inp = document.querySelector("#text")
let h2 = document.querySelector("h2")
inp.addEventListener("input", function(){
    //keep only letters and spaces
    let filterVal = inp.value.replace(/[^a-zA-Z ]/g,"")

    //update input box (Remove the invalid characters immediately)
    inp.value = filterVal

    //Show in Heading
    h2.innerText = inp.value
})