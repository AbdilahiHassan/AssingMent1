
"use strict";

//const myBoard = document.getElementById("board");
//var greenBoxes = [];

var spelare_X = 0;
var spelare_Y = 0;
var  Direction = 0;


const Game = document.getElementById("BoxY");
var loopPos = [];
var userWant = [];

function SokobarFunktion() {
  //console.log(tileMap01.width);
  //console.log(tileMap01.height);

  for (let y = 0; y < tileMap01.height; ++y) {
    for (let x = 0; x < tileMap01.width; ++x) {
      loopPos = [y, x];
      makeSokobanBox(tileMap01.mapGrid[y][x][0],y,x);
    }
  }
}

function makeSokobanBox(Direction,y, x) {
  var newBox = document.createElement("div");
  newBox.id = "y" + y + "x" + x;
  newBox.curPos = loopPos;
  //console.log(newBox.curPos);
  newBox.classList.add("box");
 
  switch (Direction) {
    case "W":
      newBox.classList.add("wallBox");
      break;
    case "B":
      newBox.classList.add("crateBox");
      break;
    case "P":
        move_X_Y(0,1);
        move_X_Y(1,1);
        move_X_Y(0,+1);
        move_X_Y(0,1);
      newBox.classList.add("player");
     

      break;
    case "G":
      newBox.classList.add("goal");
      break;
    default:
  }
  Game.appendChild(newBox);
}





function move() {
    
  
  var playerBox = document.getElementsByClassName("player")[0];

  document.getElementById("keyLog").innerHTML = playerBox.curPos; //funkar
  console.log(document.getElementsByClassName("player")[0]); //funkar
  console.log(document.getElementsByClassName("player")[0].curPos); //funkar


 
  //console.log(playerPos)
  
  //next box meck
 // console.log(userWant);
  //console.log(document.getElementById(userWant));

  //var nextBox = document.getElementById(userWant);



}
SokobarFunktion();
document.getElementsByTagName("body")[0].style.backgroundColor = "red";
Document.
 //document.onkeydown = checkKey;
 
userWant = document.getElementsByClassName("player")[0].curPos;

//debug
document.getElementById("keyLog").innerHTML = document.getElementsByClassName("player")[0].curPos;



function move_X_Y(spelare_X, spelare_Y){
    
var Play = document.getElementsByClassName("player");
Play.spelare_X = "y" + spelare_X.x + "x" + spelare_Y.y;
Play.spelare_X = "y" + spelare_X.y+ "x" + spelare_Y.x;
console.log(Play)

}

//------ run code lines --    var playerId = "y" + playerPos.y + "x" + playerPos.x;-------------------------------------------



function movement(e) {
    var x, y;
    switch(e.Direction) {
        case 37: 
            x = 0;
            y = -1;
            break;
        case 38: 
            x = -1;
            y = 0;
            break;
        case 39: 
            x = 0;
            y = 1;
            break;
        case 40: 
            x = 1;
            y = 0;
            break;
        default:
            x = 0;
            y = 0;
    }

    if (canMove(x, y)) {
        move_X_Y();
    }
}
/*
MoveYleft();
MoveXRigtht();
MoveUp();
MoveDown();
Play();

var idCounter = 0;

function MoveYleft() {
  //var MoveX = document.getElementById("player").innerHTML = X;
 
 var mleft = document.getElementById("moveleft");   
   var left = 0;
   clearInterval(idCounter);
   idCounter = setInterval(frame, 4);
   function frame() {
     if (left == 300) {
       clearInterval(idCounter);
     } else {
        left++; 
       mleft.style.left = left + "px"; 
       mleft.style.right = left + "px"; 
       //test
        
    
       
     }
   }
 }
 
function MoveXRigtht() {
    //var MoveX = document.getElementById("player").innerHTML = X;
   
   var mRight = document.getElementById("moveRigtht");   
     var Rigtht = 0;
     clearInterval(idCounter);
     idCounter = setInterval(frame, 10);
     function frame() {
       if (Rigtht == 300) {
         clearInterval(idCounter);
       } else {
        Rigtht++; 
         mRight.style.left = Rigtht + "px"; 
         mRight.style.down = Rigtht+ "px"; 
       
         
       }
     }
   }
   

//upp

function MoveUp() {
    //var MoveX = document.getElementById("player").innerHTML = X;
   
   var Mup= document.getElementById("moveUP");   
     var up = 0;
     clearInterval(idCounter);
     idCounter = setInterval(frame, 6);
     function frame() {
       if (up == 300) {
         clearInterval(idCounter);
       } else {
         up++; 
         Mup.style.top = up + "px"; 
       Mup.style.down = up + "px"; 
         //test
          
      
         
       }
     }
   }
   //down

   function MoveDown() {
    //var MoveX = document.getElementById("player").innerHTML = X;
   
   var Mdown= document.getElementById("moveDown");   
     var down = 0;
     clearInterval(idCounter);
     idCounter = setInterval(frame, 6);
     function frame() {
       if (down == 300) {
         clearInterval(idCounter);
       } else {
        down++; 
         Mdown.style.down= down + "px"; 
         Mdown.style.top = down + "px"; 
         //test
          
      
         
       }
     }
   }


//down
//play
function Play() {
    //var MoveX = document.getElementById("player").innerHTML = X;
   
   var PL= document.getElementById("player");   
     var ply = 0;
     clearInterval(idCounter);
     idCounter = setInterval(frame, 6);
     function frame() {
       if (PL == 300) {
         clearInterval(idCounter);
       } else {
        PL++; 
        PL.style.ply= ply + "px"; 
        PL.style.top = ply + "px"; 
        PL.style.down = ply + "px"; 
        PL.style.left = ply + "px"; 
        PL.style.right = ply + "px"; 

         //test
          
      
         
       }
     }
   }
*/