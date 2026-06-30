let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")
// let del = document.querySelectorAll(".delete")
btn.addEventListener("click", function(){
    // console.log("Task: "+inp.value);
    let item = document.createElement("li")
    item.innerText = inp.value

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.classList.add("delete")

    
    item.appendChild(delBtn)
    ul.appendChild(item)

    inp.value = ""
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement
        listItem.remove()
        console.log("Element Deleted");
        
    }
})

// let delBtns = document.querySelectorAll(".delete")
// for(delBtnn of delBtns){
//     delBtnn.addEventListener("click", function(){
//         console.log("Element Deleted");
//         let par = delBtnn.parentElement;
//         // console.log(par);
//         par.remove();
        
//     })
// }