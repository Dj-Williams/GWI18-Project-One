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



// // THE CORRECT CODE SNIPPET! BELOW!

window.onload = function() {
    var canvas = document.querySelector('#canvas');
    var context = canvas.getContext('2d');//This is our 2d canvas space
    var img = this.document.getElementById("stars");
    context.drawImage(img, 0, 0);
};




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


// Correct code Snippet above!
 


