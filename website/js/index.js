var images = [
  "../img/Toucan_Sam.png",
  "../img/Chef.jpg",
  "../img/Perry.png",
  "../img/fish.jpeg",
  "../img/buzz.png",
  "../img/campbell.jpeg",
  "../img/mason1.jpg",
  "../img/mason2.jpg",
  "../img/mason3.jpg",
  "../img/mario1.jpg",
  "../img/kyle1.jpg",
  "../img/zach1.jpg",
  "../img/ringo.jpg",
  "../img/akash.jpg",
  "../img/ayman.jpg",
];
var imageDesc = [
  "Toucan Sampath",
  "Chef Boyardee",
  "Perry the Platypus",
  "Gilbert",
  "Buzz Lightyear",
  "Campbell Soup",
  "Mason",
  "Mason",
  "Mason",
  "Mario being sus",
  "Kyle!",
  "Zach <3",
  "The Best Beatle",
  "Akash",
  "Reinhardt",
];
var currentImage = 0;
var count1 = 0;
var count2 = 0;
var gameState = 0;
/*
0 - Not active
1- Active
*/
document.getElementById("clickCount").innerHTML = localStorage.clickcount;
function startGame() {
  gameState = 1;
  iterateImg();
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("smashBtn").removeAttribute("hidden");
  document.getElementById("passBtn").removeAttribute("hidden");
  document.getElementById("imgDesc").removeAttribute("hidden");
  document.getElementById("clickCount").innerHTML = localStorage.clickcount;
  document.getElementById("numSmashes").innerHTML = localStorage.totalSmashes;
  document.getElementById("numPasses").innerHTML = localStorage.totalPasses;
}

function smashClick() {
  if (gameState == 1) {
    count1++;
    document.getElementById("display1").innerHTML = count1;
    increaseClick();
    totalSmashes();
  }
}

function passClick() {
  if (gameState == 1) {
    count2++;
    document.getElementById("display2").innerHTML = count2;
    increaseClick();
    totalPasses();
  }
}

function iterateImg() {
  if (gameState == 1) {
    currentImage += 1;

    if (currentImage >= images.length) {
      currentImage = 0;
    }

    document.getElementById("mainImage").src = images[currentImage];
    if (imageDesc[currentImage] != null) {
      document.getElementById("imgDesc").innerHTML = imageDesc[currentImage];
    } else {
      document.getElementById("imgDesc").innerHTML = "Null";
    }
  }
}
function increaseClick() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }



  document.getElementById("clickCount").innerHTML = localStorage.clickcount;

}

function totalSmashes(){
  if (localStorage.smashCount) {
    localStorage.smashCount = Number(localStorage.smashCount) + 1;
  } else {
    localStorage.smashCount
  }
  document.getElementById("numSmashes").innerHTML = localStorage.smashCount;
}

function totalPasses(){
  if (localStorage.passCount) {
    localStorage.passCount = Number(localStorage.passCount) + 1;
  } else {
    localStorage.passCount = 1;
  }
  document.getElementById("numPasses").innerHTML = localStorage.passCount; 

}
//Make a statistics page with number of clicks
