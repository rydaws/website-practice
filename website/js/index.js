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
  "Reinhardt"
];
var currentImage = 0;
var count1 = 0;
var count2 = 0;
var gameState = 0;
/*
0 - Not active
1- Active
*/

function startGame() {
  gameState = 1;
  iterateImg();
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("smashBtn").removeAttribute("hidden");
  document.getElementById("passBtn").removeAttribute("hidden");
  document.getElementById("imgDesc").removeAttribute("hidden");
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
    if (imageDesc[currentImage] != null) {
      document.getElementById("imgDesc").innerHTML = imageDesc[currentImage];
    } else {
      document.getElementById("imgDesc").innerHTML = "Null";
    }
  }
}
