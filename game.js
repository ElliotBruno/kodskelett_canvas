//  ------------ Setup ------------
window.focus;
// const SCREENWIDTH = innerWidth;
// const SCREENHEIGHT = innerHeight;
const player=document.getElementById("player")
const ground=document.getElementById("ground")
let gameCanvas = document.getElementById("gameCanvas");
let c = gameCanvas.getContext("2d"); // Drawing object
gameCanvas.height = window.innerHeight;
gameCanvas.width = window.innerWidth;




// -------------------------------------
// Player variables
let playerX = 150;
let playerY = 680;
let playerWidth = 15;
let playerHeight = 15;
let dx = 20;
let dy = 100;
let onground = false;
let reset = false;
let LazserX = 600;
let LazerY = 680;
var Player;
const platformY = 550; // Assuming a fixed Y-coordinate for the platform
const platformWidth = 250; // Assuming a fixed width for the platform
const platformheight=90; //Assuming a fixed height for the platform
const platformX=400; //ASsuming a fixed X-coordinate for the platform
const objectY = 400; // Assuming a fixed Y-coordinate for the object
const objectWidth = 200; // Assuming a fixed width for the object
const objectheight=200; //Assuming a fixed height for the object
const objectX=1100; //Assuming a fixed X-coordinate for the object
// ...



// if (
//   playerY + playerHeight >= platformY && // Player's bottom edge is below or at the platform's top edge
//   playerY <= platformY + 10 && // Player's top edge is above or within 10 units of the platform's bottom edge (adjust the value as needed)
//   playerX + playerWidth >= 0 && // Player's right edge is to the right of the game canvas's left edge
//   playerX <= gameCanvas.width - platformWidth // Player's left edge is to the left of the platform's right edge
// ) {
//   onground = true;
//   playerY = platformY - playerHeight;
// }

// ...


// create a new image element
const image = document.createElement('img');

// set the source of the image
image.src = 'images/pl.png';

// add the image to the HTML document
document.body.appendChild(image);


// another image
const image2 = document.createElement('img');

// set the source of the image
image2.src = 'images/dog.png';

// add the image to the HTML document
document.body.appendChild(image2);








let directions = {
  left: false,
  right: false,
  up: false,
  down: false,
};
// -------------------------------------
// ------------ Player movement ------------
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      directions.left = true;
      break;
    case "ArrowRight":
      directions.right = true;
      break;
    case "ArrowUp":
      directions.up = true;
      break;
    case " ":
      playerY -= 330;
    default:
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      directions.left = false;
      break;
    case "ArrowRight":
      directions.right = false;
      break;
    case "ArrowUp":
      directions.up = false;
      break;
   
    default:
      break;
  }
});


// -------------------------------------
// ------------ Animation ------------
function animate() {
  requestAnimationFrame(animate); // Run gameloop recursively
  c.clearRect(0, 0, gameCanvas.width, gameCanvas.height); // Clear screen

  c.fillRect(playerX, playerY, playerWidth, playerHeight); // Draw player
  c.drawImage(image,platformX, platformY, platformWidth, platformheight)
  c.drawImage(image2,objectX,objectY,objectWidth,objectheight)



  // if (playerY >= LPositionY && playerX >= deathPositionX) {
  //   // Player has reached the death position
  //   console.log('Player died!');
  //   // Handle player death logic here (e.g., reset position, decrease lives, etc.)
  // } else {
  //   if (playerY >= 680) {
  //     onground = true;
  //   } else {
  //     onground = false;
  //   }
  // console.log(image);
  if(playerY>=platformY && playerY>=platformheight && playerX >= platformX && playerX<=610 ){
    onground = true;
    
  }
  else {
    onground = false;
  }

  if(playerY>=objectY && playerY>=objectheight && playerX >= objectX ){
    reset = true;
    
  }
  else {
    reset = false;
  }


  if(playerY >= 680){
    onground = true;
  }
  // else {
  //   onground=false;
  // }

  if (!onground){
    playerY += 7;
  }
  console.log(playerX)
  console.log(onground)



 
  

  if (directions.right) {
    playerX += dx;
  }


  if (directions.up) {
    jump()
  }
 

if(directions.left && playerX >= 0)
{
  
  playerX -= dx;
}
// console.log(playerY)
}

if (playerX > gameCanvas.width){
  let body = document.getElementsByTagName("body");
  
}

// && playerX<LazserX
function jump() {
    if (onground ){
      playerY -=200;


      

  }
  
}
function death(){
  if (reset) {
    playerX-=200;
    
  }
}

// function Animation() {
//   // ...

//   if (playerX >= gameCanvas.width - playerWidth) {
//     // Change background image
//     gameCanvas.style.backgroundImage = url(d.jpg);
//   }

//   // ...
// }




// -------------------------------------
// ------------ Start game ------------
animate();

//To do: Gravity, levels, lazer, sprite, platforms

// gameCanvas.height = SCREENHEIGHT/1.082;
// gameCanvas.width = SCREENWIDTH/1.1;
// gameCanvas.style.top*(SCREENHEIGHT-gameCanvas.height)/2 + "px"
// class background(){
// }
//   const background=new background("images/abstract-futuristic-background-technology-sci-fi-frame-hud-ui_313905-455.avif");



//LAZER
// setInterval(checkCollisions, 10);
// let lazer=[];
// for (let i = 0; i <10; i++) {
//   let danger = {
//     x:Math.floor(Math.random()*myCanvas.width),
//     y:0,
//     dx:0,
//     dy:Math.floor(Math.random()*20+10),
//     radius:10,
//     color:"red",
//   }
  
// }

// let player={

// }

// c.drawImage(player.Img,player.x,player.y,player.)

// // if(player.x+player.width>myCanvas.width){
// //   myCanvas
// // }


// SPRITE
// let img = new Image();
// img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
// img.onload = function() {
//   window.requestAnimationFrame(gameLoop);
// };

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// const SCALE = 2;
// const WIDTH = 16;
// const HEIGHT = 18;
// const SCALED_WIDTH = SCALE * WIDTH;
// const SCALED_HEIGHT = SCALE * HEIGHT;

// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
//                 canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
// }

// const CYCLE_LOOP = [0, 1, 0, 2];
// let currentLoopIndex = 0;
// let frameCount = 0;
// let currentDirection = 0;

// function gameLoop() {

//   window.requestAnimationFrame(gameLoop);
// }
