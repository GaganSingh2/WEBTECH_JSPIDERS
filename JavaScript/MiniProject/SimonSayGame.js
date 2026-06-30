let gameSeq = []
let userSeq = []

let colors = ["green", "red", "yellow", "blue"]
let level = 0
let started = false

//start the game
document.addEventListener("keypress", ()=>{
    if(!started){
        started = true
        levelUp()
    }
})

//Generate next color
function levelUp(){
    userSeq = []
    level++

    document.getElementById("level").innerText = `Level ${level}`;
    
    let randomIdx = Math.floor(Math.random()*4)
    let randomColor = colors[randomIdx]
    gameSeq.push(randomColor)
    flashBtn(document.getElementById(randomColor))
}

//flash effect
function flashBtn(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")

    },250)
}

//User Click
let allBtns = document.querySelectorAll(".btn")

allBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        let color = btn.id
        userSeq.push(color)

        flashBtn(btn)
        checkAnswer(userSeq.length-1)
    })
});

//Check Answer
function checkAnswer(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(()=>{
                levelUp();
            },1000)

        }

    }else{
        document.getElementById("level").innerText = `Game Over! Score: ${level}`;

        resetGame();
    }
}

//Reset Game
function resetGame(){
    started = false;
    level = 0;
    gameSeq = []
    userSeq = []
}