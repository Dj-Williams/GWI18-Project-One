// function fly() {
//     var spaceship = document.getElementById("ship");
//     var stop = setInterval(frame, 5);
//     var position = 0;
//     // Function frame() below is essentially the function that tells the animation when to stop.
//     function frame() {
//         if(position === 2400){
//             clearInterval(stop);
//         } else {
//             // This is the only way I'm able to get my ship to move, and it will only run the code at the bottom of the if/else statement. It won't run sequences, just ONE set of instructions. These instructions tell it to go 1000px to the right until its offscreen.
//     spaceship.style.transition = "2s";
//     spaceship.style.transform = "translate(1000px, 0px)";
//         }
//         }
//     }

// var canvas = document.querySelector('canvas');
// var context = canvas.getContext('2d'); //This is our 2d canvas space

// canvas.width = window.innerWidth; //This sets the size of the canvs to fill the inner width of the window size. Makes it RESPONSIVE!
// canvas.height = window.innerHeight; //Same thing for height 

// var xPos = 0; //position of the box x
// var yPos = 0; //position of the box y

// context.fillRect(xPos,yPos,100,100);
// context.stroke();

// function move(e) {
//     // This is for the right directional key
//     if(e.keyCode ==39){
//         xPos+=10
//     }
//     // This is for the up directional key 
//     if(e.keyCode ==40){
//         yPos+=10
//     }
//     // This is for the left directional key 
//     if(e.keyCode ==37){
//         xPos-=10
//     }
//     // This is for the down directional key 
//     if(e.keyCode ==38){
//         yPos-=10
//     }
    
//     canvas.width=canvas.width;
//     context.fillRect(xPos, yPos, 100, 100);
//     context.stroke();
    
// }


// document.onkeydown.move;


var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');//This is our 2d canvas space


canvas.width = window.innerWidth;
//This sets the size of the canvs to fill the inner width of the window size. Makes it RESPONSIVE!
canvas.height = window.innerHeight;
//Same thing for height 


var xPos = 0; // postion of box
var yPos = 0;// postion of box

context.fillRect(xPos,yPos,100,100);
var bullet = context.fillRect(xPos,yPos,100,100);

context.stroke();// draw rectangle

function move(e) { 
    // This is for the right directional key
if(e.keyCode ==39){
    xPos+=70
}
    // This is for the left directional key 
if(e.keyCode ==37){
    xPos-=70
}
   // This is for the up directional key 

if(e.keyCode ==40){
    yPos+=70 
}
// This is for the down directional key

if(e.keyCode == 38){
    yPos-=70
}


// alert(e.keyCode);

canvas.width=canvas.width; //this loops it all 
context.fillRect(xPos,yPos,100,100); // this preserves the squares 
context.stroke();
}

document.onkeydown = move;





// var box;

// box = {
//     height: 32,
//     width: 32, 
//     jumping: true,
//     x: 144,
//     x_velocity: 0,
//     y: 0,
//     y_velocity: 0
// };

// loop = function() {
//     box.x++;
    
// }

// var controller = {
//     left: false,
//     up: false,
//     right: false, 
//     down: false,
//     keyListener: function(event){
//         var key_state = (event.type == "keydown")?true:false;

//         switch(event.keycode) {
//             case 37: //left key
//                 controller.left = key_state;
//             break;
//             case 38: //up key
//                 controller.up = key_state;
//             break;
//             case 39: //right key
//                 controller.left = key_state;
//             break;
//             case 40: //down key
//                 controller.left = key_state;
//             break;
//         }
//     }
// }


//  window.addEventListener("keydown", controller.keyListener);
//  window.addEventListener("keyup", controller.keyListener);

