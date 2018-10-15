var backgroundContext = document.getElementById("backgroundCanvas").getContext('2d'); //This is code for the background canvas element!

var backgroundImg = this.document.getElementById("stars"); //This is javascript grabbing the background image from html and makes it an image element.

// backgroundContext.drawImage(backgroundImg, 0, 0); //This tells JS to draw the image in the canvas environment.



// END =================== BACKGROUND IMAGE CANVAS ===========================

// ===================== GAME Canvas! =============================
    
var gamecanvas = document.querySelector('#gameCanvas'); 

var gamecontext = gamecanvas.getContext('2d'); //This is our game canvas space 




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

Animate = function ()


{
    gamecontext.clearRect(0,0, innerWidth,innerHeight)
    requestAnimationFrame(Animate)








}


Animate()
