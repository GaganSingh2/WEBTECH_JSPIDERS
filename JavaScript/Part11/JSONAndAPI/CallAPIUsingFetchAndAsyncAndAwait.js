let url = "https://catfact.ninja/fact"

async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json()
        console.log("Repsonse1: ",data);

        let res2 = await fetch(url);
        let data2 = await res2.json()
        console.log("Repsonse2: ",data2);

        // url = "https://catfact.ninja/fact2"
        let res3 = await fetch(url);
        let data3 = await res3.json()
        console.log("Repsonse3: ",data3);


        let res4 = await fetch(url);
        let data4 = await res4.json()
        console.log("Repsonse4: ",data4);
    }
    catch(error){
        console.log("Error: ",error);
        
    }
    
}
getFacts()