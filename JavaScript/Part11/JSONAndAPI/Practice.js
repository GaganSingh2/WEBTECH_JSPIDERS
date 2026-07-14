let button = document.querySelector("button")
let p = document.querySelector("#fact")

button.addEventListener("click", async ()=>{
    let resp = await getFacts()
    p.innerText = resp
}) 

async function getFacts(){
    try{
        let resp = await axios.get("https://catfact.ninja/fact")
        console.log(resp.data.fact);
        
        return resp.data.fact
    }
    catch(error){
        console.log(error);
        return "No Fact Found"
    }
}