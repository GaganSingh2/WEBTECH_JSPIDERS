// import axios from "axios";

async function getPatients() {
    try{
        const resp = await axios.get("https://catfact.ninja/fact")
        console.log("Resonse Recive Successfully!");
        console.log("Response: ",resp.data);
        console.log("Status Code: ",resp.status);
        console.log("Status Text: ",resp.statusText);
        console.log("Headers: ",resp.headers);
        console.log("Configuration: ",resp.config);
        
    }
    catch(error){
        console.log(error);
        
    }
}
getPatients()