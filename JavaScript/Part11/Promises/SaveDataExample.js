function saveToDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1 //1 to 10
    if (internetSpeed > 4) {
        // console.log("Your Data was Saved: "+data);
        success(data)
    } else {
        // console.log("Weak Connection! Data not saved!");
        failure()
    }

}


saveToDB("Apnaa College", 
    (data) => { //if this condition is true, then execute
        console.log("Success, Your Data was Saved: " + data);
        //then this inner function will execute
        saveToDB("Hello World", 
            //if this condition is true, then execute
            (data) => {
                console.log("Success, Your Data was Saved: " + data);
                
                saveToDB("Gagan", 
                    //if this condition is true, then execute
                    (data)=>{
                        console.log("Success, Your Data was Saved: " + data);
                    },
                    //otherwise this function will execute
                    ()=>{
                        console.log("Failure, Weak Connection! Data not saved!");
                    }
                )
            }, 
            //otherwise this function will execute
            () => {
                console.log("Failure, Weak Connection! Data not saved!");
            }
        )
    }, 
    //Otherwise this function will execute
    () => {
        console.log("Failure, Weak Connection! Data not saved!");
    }
)

//this situation is called as CallBack Hell.
//to overcome this problem we used Promises.