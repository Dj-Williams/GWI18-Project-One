// // function fly() {
// //     var spaceship = document.getElementById("ship");
// //     var stop = setInterval(frame, 5);
// //     var position = 0;
// //     // Function frame() below is essentially the function that tells the animation when to stop.
// //     function frame() {
// //         if(position === 2400){
// //             clearInterval(stop);
// //         } else {
// //             // This is the only way I'm able to get my ship to move, and it will only run the code at the bottom of the if/else statement. It won't run sequences, just ONE set of instructions. These instructions tell it to go 1000px to the right until its offscreen.
// //     spaceship.style.transition = "2s";
// //     spaceship.style.transform = "translate(1000px, 0px)";
// //         }
// //         }
// //     }


// =============== BACKGROUND IMAGE CANVAS ===================================

var backgroundContext = document.getElementById("backgroundCanvas").getContext('2d'); //This is code for the background canvas element!

var backgroundImg = this.document.getElementById("stars"); //This is javascript grabbing the background image from html and makes it an image element.

backgroundContext.drawImage(backgroundImg, 0, 0); //This tells JS to draw the image in the canvas environment.

// END =================== BACKGROUND IMAGE CANVAS ===========================

// ===================== GAME Canvas! =============================
    
var gamecanvas = document.querySelector('#gameCanvas'); 

var gamecontext = gamecanvas.getContext('2d'); //This is our game canvas space 
    
// END =================== Game CANVAS!! ===========================


//=============== Player Parameters! ========================

var Player = {};
Player_width = 220,
Player_height = 172,
Player_img = new Image();
Player_img.src = 'assets/Spaceship.png';

Player = {
    width: Player_width,
    height: Player_height,
    x: innerWidth/2 - Player_width/2,
    y: innerHeight - (Player_height + 10),
    Lives: 3,
};

// END ================ Player Parameters ==================

// ================ Asteroid Parameters! ======================

var asteroidReady = false;
var asteroidImage = new Image();
asteroidImage.onload = function (){
    asteroidReady = true;
};
asteroidImage.src = "assets/AsteroidBrown.png";

var asteroid = {
    speed: 100,
    x: 0,
    y: 0,
};

// END ================ Asteroid Parameters! ==================


window.onload = function() {


var xPos = 0; // postion of the player ship!
var yPos = 0;// this determines vertical postioning 


gamecontext.stroke();// draw rectangle on the game canvas space.
gamecontext.drawImage(Player_img, 0, 0)


function move(Player) { 
    // This is for the right directional key
if(Player.keyCode ==39){
    xPos+=50
}
    // This is for the left directional key 
if(Player.keyCode ==37){
    xPos-=50
}
   // This is for the up directional key 

if(Player.keyCode ==40){
    yPos+=50 
}
// This is for the down directional key

if(Player.keyCode == 38){
    yPos-=50
}

gamecanvas.width=gamecanvas.width; //this loops it all 
gamecontext.drawImage(Player_img, xPos, yPos)
}


document.onkeydown = move;
};





// Correct code Snippet above!
 


