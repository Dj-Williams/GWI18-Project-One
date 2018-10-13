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
    var backgroundContext = document.getElementById("backgroundCanvas").getContext('2d'); // This is code for the background canvas element!
    
    var gamecanvas = document.querySelector('#gameCanvas'); 

    var gamecontext = gamecanvas.getContext('2d');//This is our game canvas space 
    
    var backgroundImg = this.document.getElementById("stars"); //This is javascript grabbing the background image from html 
    
    function background() {
        this.x = 0,
        this.y = 0,
        this.w = backgroundImg.width,
        this.h = backgroundImg.height;
        this.render = function() {
            backgroundContext.drawImage(backgroundImg, this.x-=3, 0);
            if(this.x <= -767){
                this.x = 0;
            }
        }
    }

    var background = new background();

    function animate (){
        // backgroundContext.save();
        backgroundContext.fillRect(0, 0, backgroundContext.canvas.width, backgroundContext.canvas.height);
        background.render();
        backgroundContext.restore();
    }
    var animateInterval = setInterval(animate, 50 ); 

    backgroundContext.drawImage(backgroundImg, 0, 0); //This tells JS to draw the image in the canvas environment.

var xPos = 0; // postion of box
var yPos = 0;// postion of box

gamecontext.stroke();// draw rectangle on the game canvas space.

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

gamecanvas.width=gamecanvas.width; //this loops it all 
gamecontext.fillRect(xPos,yPos,100,100); // this preserves the squares

}

document.onkeydown = move;
};











// Correct code Snippet above!
 


