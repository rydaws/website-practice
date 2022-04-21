var images = ["../img/Toucan_Sam.png", "../img/Chef.jpg", "../img/Perry.png", "../img/fish.jpeg", "../img/buzz.png", "../img/campbell.jpeg"];
var currentImage = 0;


var count1 = 0;
var count2 = 0;
var gameState = 0;
/*
0 - Not active
1- Active
*/
function toggle(){
    let element = document.getElementById("start");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
    } else {
       element.setAttribute("hidden", "hidden");
    }
  
}

function startGame() {
    gameState = 1;
    iterateImg();
    document.getElementById("startBtn").style.display = "none";
    
}

function smashClick() {
    if (gameState == 1) {
        count1++;
        document.getElementById("display1").innerHTML = count1;
    }
}

function passClick() {
    if (gameState == 1) {
        count2++;
        document.getElementById("display2").innerHTML = count2;
    }
}
function iterateImg() {
    if (gameState == 1) {
        currentImage += 1;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        document.getElementById("mainImage").src = images[currentImage];
    }
}


