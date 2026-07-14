// DOM Elements

// let btn = document.querySelector('.btn')

// function btnclick(){
//     console.log("Button Clicked Twise");
// }

// btn.onclick = ()=>{
//     console.log("You Clicked First Time");
// }

// btn.onclick = ()=>{ //override the previous event
//     console.log("You Clicked Second Time");
// }

// addEventListener()

// 1)mouse event
let btn = document.querySelector('.btn')
// btn.addEventListener("click", ()=>{
//     console.log("Button Clicked Ones!");
// })

// btn.addEventListener("dblclick", ()=>{
//     console.log("Button Clicked Twise!");
// })

// btn.addEventListener("mouseover", ()=>{
//     console.log("Mouse Overed!");
// })

// btn.addEventListener("mousemove", ()=>{
//     console.log("Mouse Moved!");
// })

// btn.addEventListener("mouseup", ()=>{
//     console.log("Mouse Up!");
    
// })

btn.addEventListener("mouseout", ()=>{
    console.log("Mouse Out!");
    
})

// 2)keyBoard events
// let inp = document.querySelector('input')
// // console.log(inp.value);

// inp.addEventListener("keypress",(e)=>{
//     console.log("Key Pressed!");
//     console.log(e.target);
//     console.log(e.key);
// })

// inp.addEventListener("keydown",()=>{
//     console.log("Key Down!");
// })

// inp.addEventListener("keyup",()=>{
//     console.log("Key Up!");
// })


// 