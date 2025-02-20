let gameseq = [];
let userseq = [];
let btns = ["div1", "div2", "div3", "div4"];

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

let h2 = document.querySelector("h2");

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);

}

function checkAns(idx){
    // console.log("curr level", level)

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}<b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();   
    }  
}

function btnclick(){ 
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let btnss = document.querySelectorAll(".box");
for(btn of btnss){
    btn.addEventListener("click", btnclick);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}