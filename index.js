var images = ["Toucan_Sam.png", "Chef.jpg", "Perry.png", "fish.jpeg", "buzz.png"];
var currentImage = 0;


var count1 = 0;
var count2 = 0;


function smashClick(){
    count1++;
    document.getElementById("display1").innerHTML = count1;
}

function passClick(){
    count2++;
    document.getElementById("display2").innerHTML = count2;
}
function iterateImg(){
    currentImage += 1;

    if(currentImage >= images.length){
        currentImage = 0;
    }

    document.getElementById("mainImage").src = images[currentImage];
}


