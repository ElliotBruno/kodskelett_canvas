//  ------------ Setup ------------
window.focus;
const player=document.getElementById("player")
const ground=document.getElementById("ground")
let gameCanvas = document.getElementById("gameCanvas");
let c = gameCanvas.getContext("2d"); 
gameCanvas.height = window.innerHeight;
gameCanvas.width = window.innerWidth;




// -------------------------------------
// Player variables
let playerX = 150;
let playerY = 580;
let playerWidth = 170;
let playerHeight = 170;
let dx = 20;
let dy = 100;
let onground = false;
let reset = false;
let currentBackground = 'aobGY_.gif';

let backgroundState = 1; // 1 represents the first background, 2 represents the second background, 3 represents the third background
var Player;

const sprite = document.createElement('img');

const platformY = 380; // Assuming a fixed Y-coordinate for the platform
const platformWidth = 800; // Assuming a fixed width for the platform
const platformheight=170; //Assuming a fixed height for the platform
const platformX=350; //ASsuming a fixed X-coordinate for the platform
const objectY = 580; // Assuming a fixed Y-coordinate for the object 
const objectWidth = 150; // Assuming a fixed width for the object 
const objectheight=150; //Assuming a fixed height for the object 
const objectX=975; //Assuming a fixed X-coordinate for the object 

const objX=350;
const objY=460;
const objWidth=200;
const objheight=150;



sprite.src = 'images/d.gif';




// create a new image element
const image = document.createElement('img');

image.src='images/ss.png'
// set the source of the image

// add the image to the HTML document
document.body.appendChild(image);


// another image
const image2 = document.createElement('img');

// set the source of the image
image2.src = 'images/dog.png';

// add the image to the HTML document
document.body.appendChild(image2);


const image3 = document.createElement('img');

image.src='images/ö.png'
// set the source of the image

// add the image to the HTML document
document.body.appendChild(image3);







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


    let backgroundImage;
    let objectImage;
    let ObjectImage;
    let ObjImage;
  
    switch (backgroundState) {
      case 1:
        if (backgroundState===1) {
          ObjectImage='images/dog.png'
          ObjImage='images/ss.png'
          break; 
        };
      
      case 2:
        if (backgroundState===2) {


          break; 

        };
        
      case 3:
        if (backgroundState===3) {
          // ObjectImage='images/k.gif'  

        break;
          
        };
        case 4:
          if (backgroundState===4) {
            ObjectImage='images/cdd.png'  
  
          break;
            
          };

   
    }
  
    // Update the gameCanvas background image and object image source
    gameCanvas.style.backgroundImage = backgroundImage;
    image.src = objectImage;
    image2.src=ObjectImage;
    image3.src=ObjImage;

    

  
    c.drawImage(sprite, playerX, playerY, playerWidth, playerHeight);
    c.drawImage(image,platformX, platformY, platformWidth, platformheight)
  c.drawImage(image2,objectX,objectY,objectWidth,objectheight)
  c.drawImage(image3,objX,objY,objWidth,objheight)






  


  if (backgroundState===1) {  if(playerY>=objY && playerY>=objheight && playerX >= objX && playerX<=objX + objWidth && playerX<400 ){
    onground = true;
    
  }
  else{
    onground=false;
  }
  if (  playerX <= objectX &&
    playerX > 915  &&
    playerY <= objectY   &&
    playerY > 500) {
  
    playerX = 150;
    playerY = 580;
    
    
    
  }
  if (  playerX < 1411 &&
    playerX + playerWidth > 1410 &&
    playerY < 580 &&
    700> playerY) {
    // Reseting
    playerX = 150;
    playerY = 580;
    
    
    
  }
  if (  playerX < 790 &&
    playerX + playerWidth > 780 &&
    playerY < 580 &&
    350< playerY) {
    // Reseting
    playerX = 150;
    playerY = 580;
    
    
    
  }
  }

  if (playerY+gameCanvas.height<gameCanvas.height) {
    playerY+=20;
    
  }


  if (backgroundState===2) {
    if(playerY>=platformY && playerY>=platformheight && playerX >= platformX  && playerX<=platformWidth ){
      onground = true;
      
    }
    else{onground=false;}

    if(playerY>=400 && playerX >=370 && playerX<=800 ){
  

    playerY=580;
    playerX=150;
      
    }

    if (playerY<=300 && playerY>=280 && playerX >= 0 && playerX<=200 ) {
      onground=true;
      
    }
 

  

    
    if (playerY<=500 && playerY>=300 && playerX >= 900 && playerX<=1290 ) {
      onground=true;
      
    }

    if (playerY<=300 && playerY>=100 && playerX >= 780 && playerX<=950 ) {
      onground=true;
      
    }


    if (  playerX < 1290 &&
      playerX + playerWidth > 1040 &&
      playerY < objectY + objectheight &&
      playerY + playerHeight > objectY) {
      // Reseting
      playerX = 350;
      playerY = 380;
      
      
      
    }
  
  }
  if (backgroundState===3) {if(playerY>=400  && playerX >=820 && playerX<=900 ){
  

    playerY=471;
    playerX=180;
      
    }
 

  if(playerY>=471 && playerY>=platformheight && playerX >= 0 && playerX<=gameCanvas.width ){
    onground = true;
    
  }
  else {
    onground = false;
  }
    
  
  
    
  }

  if (backgroundState===4) 
  {if (  playerX < 1200  &&
    playerX + playerWidth > 1000 &&
    playerY < 600 &&
    playerY + playerHeight > 500) {
       // Player has landed on image2
    // Reseting
    backgroundState=1;
    gameCanvas.style.backgroundImage = "url('images/aobGY_.gif')";

    playerX = 150;
    playerY = 580;


    
  }
}







if (playerX >= gameCanvas.width - playerWidth) {
  if (backgroundState === 2) {
    
    // Change to the third background
    gameCanvas.style.backgroundImage = "url('images/c.gif')";
    backgroundState = 3;
    playerX = 150; // Reset player's X position
    playerY=471
    gameCanvas.style.backgroundSize = "contain";
  } if (backgroundState=== 1) {
    // Change to the second background
    gameCanvas.style.backgroundImage = "url('images/w.gif  ')";
    backgroundState = 2;
    // if (playerY>=500) {
    //   onground=true    
    // }
    playerY=270;
    playerX = 10; // Reset player's X position
    gameCanvas.style.backgroundSize = "contain";
    
  
  } 
 







 
  if (playerX >= gameCanvas.width - playerWidth) {
    if (backgroundState === 3) {
      // Change to the third background
      gameCanvas.style.backgroundImage = "url('images/win.jpg')";
      backgroundState = 4;
      playerX = 100; // Reset player's X position
      gameCanvas.style.backgroundSize = "cover";
    } 
  }
 
}






if (gameCanvas.style.backgroundImage === "url('images/w.gif')") {
  // Hide the images
  image.style.display = 'none';
  image2.style.display = 'none';
} 


if (playerX <= 0) {
  if (backgroundState===2) {
    gameCanvas.style.backgroundImage = "url('images/aobGY_.gif  ')";
    playerX=1350;
    gameCanvas.style.backgroundSize="contain"
    backgroundState = 1;

    
  }
 

}
if (playerX <= 0) {
  if (backgroundState===3) {
    gameCanvas.style.backgroundImage = "url('images/w.gif  ')";
    playerX=1350;
    playerY=300;
    gameCanvas.style.backgroundSize="contain"
    backgroundState = 2;

    
  }
 


}



  if(playerY >= 580){
    onground = true;
  }


  if (!onground){
    playerY += 7;
  }



 
  

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
}

if (playerX > gameCanvas.width){
  let body = document.getElementsByTagName("body");
  
}

// && playerX<LazserX
function jump() {
    if (onground ){
      let jumpHeight = 500; // Max jump height
    let jumpSpeed = 15; // Players Speed upwards
    let gravity = 3; // Gravity

    
    let jumpInterval = setInterval(() => {
      if (jumpHeight <= 0) {
        clearInterval(jumpInterval);
      } else {
        playerY -= jumpSpeed;
        jumpHeight -= jumpSpeed;
        onground = false;
      }
    }, 10);
    


    let gravityInterval = setInterval(() => {
      if (onground) {
        clearInterval(gravityInterval);
      } else {
        playerY += gravity;
      }
    }, 10);
  }
}

  






// -------------------------------------
// ------------ Start game ------------
animate();

