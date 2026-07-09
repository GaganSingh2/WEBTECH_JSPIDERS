h1 = document.querySelector("h1")

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`Color Change to ${color}!`);
            resolve("Color Changed!")
        }, delay);
    });
}

async function demo() {
    await changeColor("red", 1000)
    await changeColor("orange", 1000)
    await changeColor("aqua", 1000)
    await changeColor("green", 1000)
    changeColor("pink", 1000)
}
demo()